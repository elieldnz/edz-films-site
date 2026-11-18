/**
 * EDZ Films — recebe os pedidos do formulário (orcamento.html) e grava uma linha na planilha.
 * Instalação: na planilha, Extensões > Apps Script, cole este código, salve e
 * Implantar > Nova implantação > Tipo: App da Web > Executar como: Eu > Quem pode acessar: Qualquer pessoa.
 * Copie a URL /exec e coloque em SHEETS_URL no orcamento.html.
 */
const COLUNAS = [
  ["Data/hora", r => new Date()],
  ["Nome", r => r.nome], ["WhatsApp", r => r.whatsapp], ["Empresa/@", r => r.empresa], ["E-mail", r => r.email],
  ["Serviços", r => r.servicos], ["Segmento", r => r.segmento], ["Material gravado", r => r.material],
  ["Data/prazo", r => r.data], ["Investimento", r => r.investimento],
  ["CEP", r => r.cep], ["Número", r => r.numero], ["Endereço", r => r.endereco], ["Km ida", r => r.km_ida],
  ["Gasolina (R$)", r => r.gasolina], ["Pedágio (R$)", r => r.pedagio], ["Almoço (R$)", r => r.almoco],
  ["Equipamento EDZ (R$)", r => r.equipamento], ["Aluguel (R$)", r => r.aluguel], ["Equipamento extra", r => r.extras],
  ["Deslocamento (R$)", r => r.deslocamento], ["Pacote (R$)", r => r.pacote],
  ["Nota fiscal", r => r.nota_fiscal], ["Tributos/emissão NF (R$)", r => r.tributos], ["Total estimado (R$)", r => r.total],
  ["Mensagem", r => r.mensagem], ["Origem", r => r.origem], ["Status", r => "Novo"]
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const r = JSON.parse(e.postData.contents || "{}");
    if (!r.nome || !r.whatsapp) return out({ ok: false, erro: "dados incompletos" });
    const aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    // mantém o cabeçalho sempre igual às colunas atuais
    aba.getRange(1, 1, 1, COLUNAS.length).setValues([COLUNAS.map(c => c[0])]).setFontWeight("bold");
    // evita fórmulas injetadas: texto que começa com = + - @ vira texto
    const limpa = v => (typeof v === "string" && /^[=+\-@]/.test(v)) ? "'" + v : (v === undefined ? "" : v);
    aba.appendRow(COLUNAS.map(c => limpa(c[1](r))));
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return out({ ok: true, servico: "EDZ Films pedidos" }); }

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
