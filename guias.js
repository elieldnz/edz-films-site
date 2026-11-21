// Biblioteca EDZ Films — cada item vira um card em biblioteca.html e uma página em guia.html?g=<slug>
// Para publicar um guia novo: copie um bloco, troque slug, palavra (a palavra que você fala no Reel),
// título, resumo e o conteúdo. "novo: true" coloca o selo de Novo. Formatos: Guia, Roteiro, Prompt.
window.GUIAS = [
{
  slug: "luz-da-janela", palavra: "LUZ", formato: "Guia", tema: "Gravação", data: "nov/26", novo: true,
  titulo: "Luz bonita no Reel usando só a janela",
  resumo: "Comentou LUZ? Está aqui: onde ficar em relação à janela, a hora do dia que favorece e o truque do papel branco para tirar a sombra do rosto.",
  conteudo: `
<p>Você não precisa de ring light para o vídeo parecer profissional. A melhor luz que existe é de graça: a janela. O segredo está em <b>onde</b> você se posiciona.</p>
<h2>1. A janela fica de lado, nunca atrás</h2>
<p>Com a janela atrás de você, o celular expõe para o céu e o seu rosto fica escuro. Vire o corpo até a janela ficar a uns 45° do seu rosto, de um lado. A luz desenha o rosto e dá profundidade.</p>
<h2>2. Luz indireta é melhor que sol</h2>
<p>Sol batendo direto cria sombra dura e faz apertar os olhos. Prefira janela sem sol direto, dia nublado ou cortina fina na frente.</p>
<h2>3. O truque do papel branco</h2>
<p>O lado do rosto oposto à janela fica escuro. Coloque uma cartolina branca, um isopor ou até uma camiseta branca desse lado, fora do quadro. Ela rebate a luz e suaviza a sombra.</p>
<h2>4. Apague a luz do teto</h2>
<p>Lâmpada amarela misturada com a luz do dia deixa a pele com duas cores. Com a janela, apague a luz da sala.</p>
<div class="box"><b>Checklist antes de gravar:</b> janela de lado · sem sol direto · rebatedor branco do outro lado · luz do teto apagada · lente do celular limpa.</div>`
},
{
  slug: "audio-limpo", palavra: "ÁUDIO", formato: "Guia", tema: "Áudio", data: "nov/26", novo: true,
  titulo: "Áudio limpo no celular: 4 ajustes antes de apertar o REC",
  resumo: "Comentou ÁUDIO? Está aqui: as pessoas perdoam imagem ruim, mas pulam vídeo com som ruim. Os 4 ajustes que resolvem 90% do problema.",
  conteudo: `
<p>Som ruim é o motivo número 1 de alguém pular o seu vídeo. A boa notícia: dá para melhorar muito sem gastar quase nada.</p>
<h2>1. Chegue perto</h2>
<p>O microfone do celular é bom de perto e ruim de longe. Se for gravar sem microfone, fique a no máximo um braço de distância.</p>
<h2>2. Escolha o cômodo certo</h2>
<p>Sala vazia e banheiro fazem eco. Quarto com cama, cortina e tapete absorve o som. Desligue ventilador e ar-condicionado durante a gravação.</p>
<h2>3. Microfone de lapela</h2>
<p>Um lapela sem fio simples (na faixa de R$ 80 a R$ 200) muda o nível do vídeo. Prenda no peito, a um palmo da boca, longe do colar e do cabelo.</p>
<h2>4. Grave 5 segundos de teste</h2>
<p>Antes do take valendo, grave 5 segundos e escute com fone. Se tiver chiado, eco ou barulho de roupa, ajuste agora. Consertar depois é muito mais difícil.</p>
<div class="box">Vai gravar entrevista, podcast ou evento? A EDZ leva microfones próprios na captação. <a href="https://elieldnz.github.io/edz-orcamento/?servico=captacao">Peça um orçamento</a>.</div>`
},
{
  slug: "ganchos", palavra: "GANCHO", formato: "Roteiro", tema: "Roteiro", data: "nov/26", novo: true,
  titulo: "10 ganchos para os 3 primeiros segundos do seu Reel",
  resumo: "Comentou GANCHO? Está aqui: 10 frases de abertura prontas para comércio, restaurante e prestador de serviço, e como adaptar para o seu negócio.",
  conteudo: `
<p>Nos 3 primeiros segundos a pessoa decide se fica ou se rola. O gancho é a primeira frase e a primeira imagem. Use estes modelos e troque as palavras entre colchetes.</p>
<ol>
<li>"Pare de [erro comum] se você quer [resultado]."</li>
<li>"Ninguém te conta isso sobre [seu produto]."</li>
<li>"[Número] coisas que eu faria se abrisse [seu tipo de negócio] hoje."</li>
<li>"Por que o nosso [produto] custa [preço]? Vou te mostrar."</li>
<li>"Olha o que acontece quando [processo curioso do seu trabalho]."</li>
<li>"O pedido mais estranho que a gente já recebeu foi…"</li>
<li>"Se você mora em [bairro/cidade], precisa conhecer isso."</li>
<li>"Antes e depois de [serviço] em 15 segundos."</li>
<li>"Você está [fazendo algo] do jeito errado. Faz assim."</li>
<li>"Um dia normal na [nome do negócio] em 30 segundos."</li>
</ol>
<h2>A imagem também é gancho</h2>
<p>Comece no meio da ação: a massa caindo na frigideira, a tesoura cortando, o produto sendo aberto. Nada de começar com "Oi, gente, tudo bem?".</p>
<div class="box"><b>Teste rápido:</b> assista só os 3 primeiros segundos sem som. Se não der vontade de ver o resto, troque o gancho.</div>`
},
{
  slug: "roteiro-5-linhas", palavra: "ROTEIRO", formato: "Roteiro", tema: "Roteiro", data: "nov/26",
  titulo: "Roteiro de Reel em 5 linhas: o modelo que eu uso com clientes",
  resumo: "Comentou ROTEIRO? Está aqui: gancho, problema, virada, prova e chamada. O modelo em 5 linhas com um exemplo pronto de restaurante.",
  conteudo: `
<p>Todo Reel que funciona tem a mesma espinha. Escreva uma linha para cada parte antes de gravar e o vídeo sai em metade do tempo.</p>
<ol>
<li><b>Gancho</b> (0–3s): a frase ou imagem que prende.</li>
<li><b>Problema</b> (3–8s): a dor de quem está assistindo.</li>
<li><b>Virada</b> (8–20s): como você resolve, mostrando.</li>
<li><b>Prova</b> (20–25s): cliente, resultado, número, antes e depois.</li>
<li><b>Chamada</b> (25–30s): o que a pessoa faz agora. Uma ação só.</li>
</ol>
<h2>Exemplo: hamburgueria</h2>
<div class="box">
1. "Esse é o hambúrguer que acabou em 2 horas no sábado."<br>
2. "Sabe quando o pão desmancha antes da metade?"<br>
3. Close no pão sendo selado na chapa, carne, queijo derretendo.<br>
4. Cliente mordendo e fazendo sinal de positivo.<br>
5. "Peça pelo link da bio antes de acabar de novo."
</div>
<p>Já tem material gravado e não tem tempo de editar? O <a href="https://elieldnz.github.io/edz-orcamento/?servico=reels">Reels Express</a> transforma em vídeo pronto em 48h.</p>`
},
{
  slug: "camera-do-celular", palavra: "CÂMERA", formato: "Guia", tema: "Gravação", data: "nov/26",
  titulo: "Configure a câmera do celular para vídeo em 2 minutos",
  resumo: "Comentou CÂMERA? Está aqui: resolução, quadros por segundo, travar foco e exposição e por que limpar a lente muda tudo. Vale para iPhone e Android.",
  conteudo: `
<h2>1. Resolução e quadros</h2>
<p>Grave em <b>4K a 30 qps</b> (ou 1080p a 30 se faltar espaço). Para câmera lenta de produto, 60 qps. Evite mudar no meio de uma mesma gravação.</p>
<h2>2. Câmera de trás</h2>
<p>A câmera traseira é muito melhor que a frontal. Use a de trás e um espelho ou a tela de outro celular para se enquadrar.</p>
<h2>3. Trave foco e exposição</h2>
<p>Toque e segure no seu rosto até aparecer "AE/AF bloqueado" (iPhone) ou o cadeado (Android). Assim a imagem não fica clareando e escurecendo.</p>
<h2>4. Celular em pé e na altura dos olhos</h2>
<p>Para Reels, vertical sempre. Lente na altura dos olhos, nunca de baixo para cima.</p>
<h2>5. Limpe a lente</h2>
<p>Parece bobo, mas é a causa mais comum de imagem "leitosa". Passe a barra da camiseta antes de cada gravação.</p>`
},
{
  slug: "cortes-de-live", palavra: "CORTES", formato: "Guia", tema: "Edição", data: "out/26",
  titulo: "Uma live de 1 hora vira 6 cortes: como escolher os trechos",
  resumo: "Comentou CORTES? Está aqui: os 4 tipos de trecho que viram corte, como marcar durante a live e o formato vertical que segura a atenção.",
  conteudo: `
<p>Uma live ou podcast de uma hora tem pelo menos 6 Reels escondidos. O trabalho é achar os trechos certos.</p>
<h2>Os 4 tipos de trecho que funcionam</h2>
<ul>
<li><b>Opinião forte:</b> quando alguém discorda ou fala algo polêmico do seu nicho.</li>
<li><b>Dica prática:</b> um passo a passo que cabe em 40 segundos.</li>
<li><b>História:</b> um caso com começo, meio e fim.</li>
<li><b>Número:</b> um dado surpreendente.</li>
</ul>
<h2>Marque durante a live</h2>
<p>Deixe alguém anotando o minuto de cada momento bom. Isso economiza horas na edição.</p>
<h2>Formato que segura</h2>
<p>Vertical 9:16, legenda grande no centro, corte a cada 2 ou 3 segundos e o melhor momento logo no começo.</p>
<div class="box">A EDZ faz <b>6 cortes de até 60s por R$ 600</b> a partir de até 90 minutos de material. <a href="https://elieldnz.github.io/edz-orcamento/?servico=cortes">Pedir orçamento</a>.</div>`
},
{
  slug: "o-que-fotografar-na-festa", palavra: "FESTA", formato: "Guia", tema: "Festas", data: "out/26",
  titulo: "O que fotografar numa festa: o checklist de decoração e detalhes",
  resumo: "Comentou FESTA? Está aqui: a ordem das fotos antes dos convidados chegarem, os detalhes que a decoradora vai querer e o momento do parabéns.",
  conteudo: `
<p>A decoração fica pronta e, uma hora depois, já tem copo em cima da mesa. Por isso as fotos de detalhe vêm <b>antes</b> dos convidados.</p>
<h2>Antes da festa (30 min)</h2>
<ul>
<li>Mesa completa, de frente e na diagonal.</li>
<li>Bolo de perto, com o topo.</li>
<li>Doces nas forminhas, de cima e de lado.</li>
<li>Toppers, personagens e lembrancinhas.</li>
<li>Painel e balões sem ninguém na frente.</li>
</ul>
<h2>Durante</h2>
<ul><li>Convidados chegando, abraços, crianças brincando.</li><li>Família com o aniversariante na mesa.</li></ul>
<h2>Parabéns</h2>
<p>Fique na frente da mesa, um pouco acima. Faça a foto da vela acesa, do sopro e da reação.</p>
<p>Veja como ficam as fotos de decoração na <a href="https://elieldnz.github.io/edz-films-site/#fotos">galeria de festas da EDZ</a>.</p>`
},
{
  slug: "reels-para-restaurante", palavra: "RESTAURANTE", formato: "Roteiro", tema: "Negócio", data: "out/26",
  titulo: "5 Reels para o seu restaurante gravar esta semana",
  resumo: "Comentou RESTAURANTE? Está aqui: cinco ideias que dá para gravar com o celular no meio do expediente, com o gancho de cada uma.",
  conteudo: `
<ol>
<li><b>O prato saindo:</b> do pedido ao prato na mesa em 15s. Gancho: "Do fogo pra sua mesa em 15 segundos."</li>
<li><b>Bastidores da abertura:</b> a cozinha às 10h. Gancho: "O que acontece aqui antes de você chegar."</li>
<li><b>Reação do cliente:</b> a primeira mordida. Peça autorização antes.</li>
<li><b>Quem faz:</b> 20 segundos com o cozinheiro contando o prato favorito dele.</li>
<li><b>Promoção do dia:</b> o prato + preço + até que horas. Chamada direta.</li>
</ol>
<div class="box"><b>Dica:</b> grave tudo num dia e poste um por dia. Consistência vale mais que vídeo perfeito.</div>`
},
{
  slug: "prompt-legenda", palavra: "LEGENDA", formato: "Prompt", tema: "IA", data: "out/26",
  titulo: "Prompt para a IA escrever a legenda no seu tom",
  resumo: "Comentou LEGENDA? Está aqui: o prompt pronto para colar no Claude ou no ChatGPT, com o espaço para as suas legendas de exemplo.",
  conteudo: `
<p>A IA escreve genérico porque não sabe como você fala. Dê exemplos e ela copia o seu jeito.</p>
<div class="prompt"><button class="copy">Copiar</button><pre>Você vai escrever legendas de Instagram para o meu negócio.

Sobre o negócio: [o que você vende, para quem, cidade]
Tom: [ex.: próximo, bem-humorado, sem gírias]

Aqui estão 3 legendas minhas que deram certo. Copie o jeito de escrever, o tamanho e o uso de emoji:
1) [cole aqui]
2) [cole aqui]
3) [cole aqui]

Agora escreva 3 opções de legenda para este vídeo: [descreva o vídeo].
Cada uma com: primeira linha que prende, até 4 linhas, uma chamada no final.
Não use hashtags no meio do texto.</pre></div>
<p>Guarde o prompt com os seus exemplos. Da próxima vez, só troque a descrição do vídeo.</p>`
},
{
  slug: "prompt-calendario", palavra: "CALENDÁRIO", formato: "Prompt", tema: "IA", data: "out/26",
  titulo: "Prompt: 30 dias de ideias de Reels em uma conversa",
  resumo: "Comentou CALENDÁRIO? Está aqui: o prompt que monta o mês inteiro de pautas, dividido por objetivo, com o gancho de cada dia.",
  conteudo: `
<div class="prompt"><button class="copy">Copiar</button><pre>Monte um calendário de 30 dias de Reels para o meu negócio.

Negócio: [o que você faz]
Cliente ideal: [quem compra]
Objetivo do mês: [ex.: encher a agenda de dezembro]
Posso gravar: [ex.: 3 vezes por semana, só com celular]

Divida assim: 40% dicas úteis, 30% bastidores, 20% prova (clientes, antes e depois), 10% oferta direta.
Entregue uma tabela com: dia, tipo, ideia do vídeo, gancho (primeira frase) e o que gravar.</pre></div>
<p>Peça em seguida: "Agora escreva o roteiro em 5 linhas dos 5 primeiros" e use o <a href="guia.html?g=roteiro-5-linhas">modelo de roteiro</a>.</p>`
}
];
