/**
 * Puillet Vitrerie · réception des demandes « Devis express » (page puilletvitrerie.fr/devis).
 *
 * À coller dans un projet Google Apps Script du compte puilletvitrerie@gmail.com.
 * 1. Lancer une fois la fonction `installer` : elle crée le Google Sheet « Demandes de devis »,
 *    le dossier Drive privé « Demandes de devis · photos » et le code secret.
 * 2. Déployer → Nouveau déploiement → Application Web : exécuter en tant que « Moi », accès « Tout le monde ».
 * 3. Recopier dans Vercel : DEVIS_WEBHOOK_URL = l'adresse de l'application Web,
 *    DEVIS_WEBHOOK_SECRET = le code affiché par `installer` (Journal d'exécution).
 */

var DESTINATAIRE = "puilletvitrerie@gmail.com";
var COLONNES = [
  "Date", "Prénom", "Téléphone", "Ville", "Type", "Urgence", "Message", "Photos",
  "Source", "utm_source", "utm_medium", "utm_campaign",
  "Consentement contact", "Consentement marketing", "Date du consentement",
];

function installer() {
  var props = PropertiesService.getScriptProperties();
  if (!props.getProperty("SHEET_ID")) {
    var ss = SpreadsheetApp.create("Demandes de devis · Puillet Vitrerie");
    ss.getSheets()[0].appendRow(COLONNES).setFrozenRows(1);
    props.setProperty("SHEET_ID", ss.getId());
  }
  if (!props.getProperty("FOLDER_ID")) {
    props.setProperty("FOLDER_ID", DriveApp.createFolder("Demandes de devis · photos").getId());
  }
  if (!props.getProperty("SECRET")) {
    props.setProperty("SECRET", Utilities.getUuid() + Utilities.getUuid().slice(0, 8));
  }
  Logger.log("Code secret à mettre dans Vercel (DEVIS_WEBHOOK_SECRET) : " + props.getProperty("SECRET"));
  Logger.log("Google Sheet : " + SpreadsheetApp.openById(props.getProperty("SHEET_ID")).getUrl());
}

function reponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function echapper(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var d;
  try {
    d = JSON.parse(e.postData.contents);
  } catch (err) {
    return reponse({ ok: false, error: "json" });
  }
  if (!d.secret || d.secret !== props.getProperty("SECRET")) return reponse({ ok: false, error: "secret" });

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    // Photos : rangées dans le dossier Drive privé de Léo (non partagé).
    var dossier = DriveApp.getFolderById(props.getProperty("FOLDER_ID"));
    var stamp = Utilities.formatDate(new Date(), "Europe/Paris", "yyyy-MM-dd HH'h'mm");
    var pieces = [];
    var liens = [];
    (d.photos || []).slice(0, 3).forEach(function (p, i) {
      var blob = Utilities.newBlob(Utilities.base64Decode(p.base64), "image/jpeg", stamp + " " + d.prenom + " " + (i + 1) + ".jpg");
      var fichier = dossier.createFile(blob);
      liens.push(fichier.getUrl());
      pieces.push(blob);
    });

    var maintenant = Utilities.formatDate(new Date(), "Europe/Paris", "dd/MM/yyyy HH:mm");
    SpreadsheetApp.openById(props.getProperty("SHEET_ID")).getSheets()[0].appendRow([
      maintenant, d.prenom, "'" + d.telephone, d.ville, d.type, d.urgence, d.message, liens.join("\n"),
      d.source, d.utm_source, d.utm_medium, d.utm_campaign,
      d.ok_contact ? "oui" : "non", d.ok_marketing ? "oui" : "non", maintenant,
    ]);

    // E-mail à Léo : arrive en notification Gmail sur son téléphone.
    var tel = String(d.telephone || "").replace(/[^\d+]/g, "");
    var lignes = [
      ["Téléphone", '<a href="tel:' + echapper(tel) + '" style="font-size:20px;font-weight:bold">' + echapper(d.telephone) + "</a>"],
      ["Ville", echapper(d.ville)],
      ["Type", echapper(d.type || "—")],
      ["Urgence", echapper(d.urgence || "—")],
      ["Message", echapper(d.message || "—")],
      ["Source", echapper(d.source)],
      ["Offres", d.ok_marketing ? "accepte de recevoir des conseils et offres" : "non"],
      ["Photos", liens.length ? liens.map(function (l, i) { return '<a href="' + l + '">Photo ' + (i + 1) + "</a>"; }).join(" · ") : "aucune"],
    ];
    var html =
      "<h2 style=\"margin:0 0 12px\">Nouvelle demande de devis : " + echapper(d.prenom) + "</h2><table cellpadding=\"6\">" +
      lignes.map(function (l) { return "<tr><td style=\"color:#5a5550\">" + l[0] + "</td><td>" + l[1] + "</td></tr>"; }).join("") +
      "</table>";
    var sujet = (d.urgence === "Aujourd'hui" ? "🚨 URGENT · " : "🔔 ") + "Devis express · " + d.prenom + " · " + d.ville;
    MailApp.sendEmail({ to: DESTINATAIRE, subject: sujet, htmlBody: html, attachments: pieces, name: "Site Puillet Vitrerie" });
  } finally {
    lock.releaseLock();
  }
  return reponse({ ok: true });
}
