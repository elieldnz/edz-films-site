/* EDZ Films — efeito "sinal entrando" (adaptado do modelo Glitch Text Dissolve, AnimatedWebs)
   1. Títulos de seção se decodificam ao aparecer (caracteres aleatórios -> texto).
   2. Fotos se formam a partir de pixels grandes com separação de cor (RGB) ao aparecer,
      e dão uma falha mais curta e forte no hover.
   3. Botões embaralham as letras por 300 ms no hover.
   Desliga tudo com prefers-reduced-motion. No celular só os títulos animam (sem hover, sem canvas). */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const fino = matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)").matches;
  const CORES = ["#F5B700", "#FF4D3D"];
  const SIMB = "▓▒░█#%&@<>/\\|01".split("");
  const rnd = a => a[(Math.random() * a.length) | 0];

  /* ---------- 1. títulos decodificando ---------- */
  const decodifica = (el, dur = 900) => {
    const txt = el.dataset.gtxt || (el.dataset.gtxt = el.textContent);
    el.setAttribute("aria-label", txt);
    const n = txt.length, t0 = performance.now();
    const passo = t => {
      const p = Math.min(1, (t - t0) / dur);
      let out = "";
      for (let i = 0; i < n; i++) {
        const c = txt[i];
        const pronto = p * (n + 8) > i + 8 * Math.random(); // resolve da esquerda para a direita
        out += c === " " || pronto ? c : rnd(SIMB);
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(passo); else el.textContent = txt;
    };
    requestAnimationFrame(passo);
  };
  const titulos = document.querySelectorAll(".sec-title, .final h2");
  const ioT = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { decodifica(e.target); ioT.unobserve(e.target); }
  }), { threshold: .4 });
  titulos.forEach(h => { if (!h.children.length) ioT.observe(h); });

  /* ---------- 3. botões com falha no hover ---------- */
  if (fino) document.querySelectorAll(".btn").forEach(b => {
    if (b.children.length) return;
    const txt = b.textContent; let ativo = false;
    b.setAttribute("aria-label", txt.trim());
    b.addEventListener("mouseenter", () => {
      if (ativo) return; ativo = true;
      const w = b.offsetWidth; b.style.minWidth = w + "px";
      const t0 = performance.now();
      const passo = t => {
        const p = (t - t0) / 300;
        if (p >= 1) { b.textContent = txt; b.style.minWidth = ""; ativo = false; return; }
        b.innerHTML = [...txt].map(c => c === " " || Math.random() < p ? c
          : `<span style="color:${rnd(CORES)}">${Math.random() < .5 ? rnd(SIMB) : c}</span>`).join("");
        requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
  });

  /* ---------- 2. fotos se formando em pixels ---------- */
  if (!fino) return;
  const DPR = Math.min(devicePixelRatio || 1, 1.5);
  const canal = (src, w, h, cor) => { // cópia só com um canal de cor (sem ler pixels: funciona com imagens externas)
    const c = new OffscreenCanvas(w, h), x = c.getContext("2d");
    x.drawImage(src, 0, 0); x.globalCompositeOperation = "multiply";
    x.fillStyle = cor; x.fillRect(0, 0, w, h);
    x.globalCompositeOperation = "destination-in"; x.drawImage(src, 0, 0);
    return c;
  };
  const falha = (img, { pix = 16, rgb = 8, dur = 700 } = {}) => {
    const caixa = img.parentElement;
    if (!img.complete || !img.naturalWidth || caixa.querySelector(".gl-cv")) return;
    const r = img.getBoundingClientRect(), W = Math.round(r.width * DPR), H = Math.round(r.height * DPR);
    if (!W || !H) return;
    const cv = document.createElement("canvas");
    cv.className = "gl-cv"; cv.width = W; cv.height = H;
    cv.style.cssText = `position:absolute;left:${img.offsetLeft}px;top:${img.offsetTop}px;width:${r.width}px;height:${r.height}px;pointer-events:none`;
    img.after(cv);
    const ctx = cv.getContext("2d"), peq = new OffscreenCanvas(W, H), pc = peq.getContext("2d");
    const base = new OffscreenCanvas(W, H), bc = base.getContext("2d");
    // recorte igual ao object-fit: cover
    const nw = img.naturalWidth, nh = img.naturalHeight, k = Math.max(W / nw, H / nh);
    const cw = W / k, ch = H / k, cx = (nw - cw) / 2, cy = (nh - ch) / 2;
    const t0 = performance.now();
    const passo = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); // ease-out
      const tam = Math.max(1, Math.round(pix * DPR * (1 - e)));         // tamanho do pixel diminui
      const off = rgb * DPR * (1 - e) * (Math.random() * .6 + .7);       // separação de cor diminui
      const sw = Math.max(1, Math.ceil(W / tam)), sh = Math.max(1, Math.ceil(H / tam));
      pc.imageSmoothingEnabled = true; pc.clearRect(0, 0, sw, sh); pc.drawImage(img, cx, cy, cw, ch, 0, 0, sw, sh);
      bc.imageSmoothingEnabled = false; bc.clearRect(0, 0, W, H); bc.drawImage(peq, 0, 0, sw, sh, 0, 0, W, H);
      ctx.clearRect(0, 0, W, H);
      if (off > .5) {
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canal(base, W, H, "#ff0000"), -off, 0);
        ctx.drawImage(canal(base, W, H, "#00ff00"), 0, 0);
        ctx.drawImage(canal(base, W, H, "#0000ff"), off, 0);
        ctx.globalCompositeOperation = "source-over";
        // faixas horizontais deslocadas (falha de sinal)
        const faixas = Math.round(3 * (1 - e));
        for (let i = 0; i < faixas; i++) {
          const y = Math.random() * H, fh = (4 + Math.random() * 18) * DPR, dx = (Math.random() - .5) * 30 * DPR * (1 - e);
          ctx.drawImage(base, 0, y, W, fh, dx, y, W, fh);
        }
      } else ctx.drawImage(base, 0, 0);
      cv.style.opacity = p > .85 ? (1 - p) / .15 : 1;
      if (p < 1) requestAnimationFrame(passo); else cv.remove();
    };
    requestAnimationFrame(passo);
  };
  const ioI = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const img = e.target; ioI.unobserve(img);
    img.complete ? falha(img) : img.addEventListener("load", () => falha(img), { once: true });
  }), { threshold: .4 });
  const prepara = img => {
    if (img.dataset.gl) return; img.dataset.gl = 1;
    ioI.observe(img);
    img.parentElement.addEventListener("mouseenter", () => falha(img, { pix: 8, rgb: 10, dur: 500 }));
  };
  const SEL = ".gallery img, .niche .thumb img";
  document.querySelectorAll(SEL).forEach(prepara);
  // a galeria é redesenhada ao trocar de tema: pega as fotos novas
  new MutationObserver(() => document.querySelectorAll(SEL).forEach(prepara))
    .observe(document.querySelector("main") || document.body, { childList: true, subtree: true });
})();
