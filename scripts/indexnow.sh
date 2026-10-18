#!/bin/sh
# Prévient Bing (et Yandex, Seznam…) via IndexNow que les pages du site ont changé.
# À lancer après chaque mise en ligne : sh scripts/indexnow.sh
KEY="7185cd773ec826710a5fcaa4da636cb9"
URLS=$(curl -s https://www.puilletvitrerie.fr/sitemap.xml | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sed 's/.*/"&"/' | paste -sd, -)
curl -s -o /dev/null -w "IndexNow : %{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"www.puilletvitrerie.fr\",\"key\":\"$KEY\",\"keyLocation\":\"https://www.puilletvitrerie.fr/$KEY.txt\",\"urlList\":[$URLS]}"
