# EDZ Films — página de divulgação

Landing page de uma página da EDZ Films: pacotes de edição (Reels Express, Cortes de conteúdo, Meia diária), portfólio por segmento com as playlists do YouTube e contato direto pelo WhatsApp.

É um único `index.html`, sem build e sem dependências.

## Páginas

- `index.html`: site completo.
- `orcamento.html`: só redireciona para a landing page de orçamento, que agora fica em outro repositório (elieldnz/edz-orcamento → https://elieldnz.github.io/edz-orcamento/), separada para os anúncios.

## Editar

Tudo o que muda com frequência fica no bloco `CONFIGURAÇÃO`, no fim do `index.html`:

- `WHATSAPP`: número com DDI e DDD, só dígitos (ex.: `5511999999999`). Fica no `index.html` daqui e no `index.html` do repositório edz-orcamento: troque nos dois.
- `NICHOS`: título, texto, vídeo de capa e playlist de cada segmento
- `FAIXA` e `SKILLS`: palavras da faixa rolando e das etiquetas

Preços e textos dos pacotes estão direto no HTML, na seção `id="pacotes"` e no cartão do topo.

## Publicar no GitHub Pages

1. Deixe o repositório público (Settings → General → Change visibility).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
3. O site fica em `https://elieldnz.github.io/edz-films-site/`.

## Ver localmente

Abra o `index.html` (site) ou o `orcamento.html` (landing page de orçamento) no navegador, ou rode `python3 -m http.server` na pasta.
