import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import "@fontsource/jetbrains-mono/500.css";
import { theme } from "./theme";

// Loop perfeito: tudo que é cíclico usa senos com período = duração total.
const FOCO: Record<string, string> = { "cortes.jpg": "78% 40%" };
const SHOTS = ["cortes.jpg", "jhon-3-mesa.jpg", "thalita-35-bolo.jpg", "isabela-12-roda.jpg", "lorena-10-bolo.jpg"];

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const BgMesh: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = (frame / durationInFrames) * Math.PI * 2;
  return (
    <AbsoluteFill style={{ background: theme.colors.bg }}>
      <div style={{ position: "absolute", width: 1100, height: 1100, borderRadius: "50%", top: -480, left: -260 + Math.sin(t) * 60,
        filter: "blur(60px)", background: `radial-gradient(circle, ${theme.colors.accent}88, transparent 62%)` }} />
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", bottom: -420, right: -220 - Math.cos(t) * 50,
        filter: "blur(80px)", background: `radial-gradient(circle, ${theme.colors.bgAlt}, transparent 65%)` }} />
    </AbsoluteFill>
  );
};

// Cada foto: Ken Burns (alterna zoom in/out e direção do pan) + troca "scale-through" de 14 quadros.
const Shot: React.FC<{ src: string; i: number; per: number; xf: number }> = ({ src, i, per, xf }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // posição relativa ao início desta foto, com volta para o começo (loop)
  let f = (((frame - i * per) % durationInFrames) + durationInFrames) % durationInFrames;
  if (f > durationInFrames - xf) f -= durationInFrames; // a 1ª foto já começa a entrar no fim: emenda sem corte
  const enter = interpolate(f, [-xf, 0], [0, 1], { ...clamp, easing: theme.ease.out });
  const exit = interpolate(f, [per - xf, per], [1, 0], { ...clamp, easing: theme.ease.in });
  const vis = Math.min(enter, exit);
  if (vis <= 0) return null;
  const zoomIn = i % 2 === 0;
  const kb = interpolate(f, [-xf, per], zoomIn ? [1.0, 1.09] : [1.09, 1.0], { ...clamp, easing: theme.ease.inOut });
  const pan = interpolate(f, [-xf, per], zoomIn ? [0, -28] : [-28, 0], clamp);
  const through = interpolate(exit, [0, 1], [1.12, 1]) * interpolate(enter, [0, 1], [0.94, 1]);
  return (
    <AbsoluteFill style={{ opacity: vis }}>
      <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: FOCO[src] ?? "50% 50%",
        transform: `scale(${kb * through}) translateX(${pan}px)`, filter: "saturate(1.05) contrast(1.06)" }} />
    </AbsoluteFill>
  );
};

// Visor de câmera: cantos + REC piscando + timecode. Respira de leve.
const Viewfinder: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const t = (frame / durationInFrames) * Math.PI * 2;
  const breathe = 1 + Math.sin(t * 2) * 0.006;
  const m = 40, L = 44, w = 3;
  const corner = (pos: React.CSSProperties, rot: number) => (
    <div style={{ position: "absolute", width: L, height: L, ...pos, transform: `rotate(${rot}deg)`,
      borderTop: `${w}px solid ${theme.colors.text}`, borderLeft: `${w}px solid ${theme.colors.text}`, opacity: 0.75 }} />
  );
  const rec = (Math.floor(frame / (fps / 2)) % 2 === 0) ? 1 : 0.25; // pisca a cada meio segundo
  const total = Math.floor(frame / fps) + 12 * 60 + 4;
  const tc = `00:${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}:${String(frame % fps).padStart(2, "0")}`;
  return (
    <AbsoluteFill style={{ transform: `scale(${breathe})`, pointerEvents: "none" }}>
      {corner({ left: m, top: m }, 0)}
      {corner({ right: m, top: m }, 90)}
      {corner({ right: m, bottom: m }, 180)}
      {corner({ left: m, bottom: m }, 270)}
      <div style={{ position: "absolute", left: m + L + 14, top: m - 2, display: "flex", alignItems: "center", gap: 12,
        fontFamily: theme.fonts.mono, fontWeight: 500, fontSize: 18, letterSpacing: "0.08em", color: theme.colors.text }}>
        <span style={{ width: 12, height: 12, borderRadius: 6, background: theme.colors.primary, opacity: rec,
          boxShadow: `0 0 18px ${theme.colors.glow}` }} />
        REC
      </div>
      <div style={{ position: "absolute", right: m + L + 14, top: m - 2, fontFamily: theme.fonts.mono, fontWeight: 500,
        fontSize: 18, letterSpacing: "0.06em", color: theme.colors.textDim, fontVariantNumeric: "tabular-nums" }}>{tc}</div>
      <div style={{ position: "absolute", left: width / 2 - 14, top: height / 2 - 1, width: 28, height: 2, background: theme.colors.text, opacity: 0.35 }} />
      <div style={{ position: "absolute", left: width / 2 - 1, top: height / 2 - 14, width: 2, height: 28, background: theme.colors.text, opacity: 0.35 }} />
    </AbsoluteFill>
  );
};

const Grade: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    <AbsoluteFill style={{ backgroundColor: theme.colors.accent, mixBlendMode: "soft-light", opacity: 0.22 }} />
    <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.25), transparent 30%, transparent 70%, rgba(0,0,0,0.35))" }} />
  </AbsoluteFill>
);

const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const noise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;
  return <AbsoluteFill style={{ pointerEvents: "none", backgroundImage: noise, backgroundSize: "220px",
    backgroundPosition: `${(frame * 7) % 220}px ${(frame * 13) % 220}px`, opacity: 0.07, mixBlendMode: "overlay" }} />;
};

const Vignette: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: "none", background: "radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.45) 100%)" }} />
);

export const HeroLoop: React.FC = () => {
  const { durationInFrames, fps } = useVideoConfig();
  const per = Math.round(durationInFrames / SHOTS.length);
  const xf = Math.round(fps * 0.5);
  return (
    <AbsoluteFill>
      <BgMesh />
      {SHOTS.map((s, i) => <Shot key={s} src={s} i={i} per={per} xf={xf} />)}
      <Grade />
      <Viewfinder />
      <Grain />
      <Vignette />
    </AbsoluteFill>
  );
};
