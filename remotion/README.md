# Vídeo do topo (Remotion)
Fonte do loop de 10 s que roda no topo do site (`video/hero.mp4` e `video/hero.webm`).
Fotos em `public/` (copie de `img/festa/`). Renderizar:
    npm i && npx remotion render src/index.ts HeroCard out/hero.mp4 --codec h264 --crf 17
    ffmpeg -i out/hero.mp4 -an -c:v libx264 -crf 29 -vf scale=576:720 -movflags +faststart ../video/hero.mp4
