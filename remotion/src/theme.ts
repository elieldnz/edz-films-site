// Tema único da EDZ Films (Película + Tungstênio). Nada de cor ou curva fora daqui.
import { Easing } from "remotion";

export const theme = {
  colors: {
    bg: "#121110",
    bgAlt: "#2A0E16",
    primary: "#F5B700", // cor de destaque: no máximo 1 elemento por quadro (o REC)
    accent: "#7A182C",
    text: "#F3EFE6",
    textDim: "#BFB2A8",
    glow: "rgba(245, 183, 0, 0.45)",
  },
  fonts: { mono: "JetBrains Mono" },
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1),
    inOut: Easing.bezier(0.83, 0, 0.17, 1),
    in: Easing.bezier(0.7, 0, 0.84, 0),
  },
  spring: {
    snappy: { damping: 14, stiffness: 160, mass: 0.6 },
    smooth: { damping: 20, stiffness: 90, mass: 1 },
  },
} as const;
