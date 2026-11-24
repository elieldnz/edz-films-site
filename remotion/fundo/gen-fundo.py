# Fundo "luz líquida" EDZ: faixas de luz que ondulam, loop perfeito (tempo periódico).
import numpy as np, subprocess, sys
W,H,FPS,SEC = 960,540,30,8
N = FPS*SEC
y,x = np.mgrid[0:H,0:W].astype(np.float32)
u = x/W; v = y/H
bg = np.array([18,17,16],np.float32)/255
# (cor RGB, altura base, amplitude, freq, velocidade inteira, largura, brilho)
FAIXAS = [
  ((0.98,0.62,0.02), 0.58, 0.10, 1.6, 1, 0.010, 1.0),   # âmbar principal
  ((1.00,0.70,0.28), 0.62, 0.12, 1.3, 2, 0.004, 0.9),   # âmbar claro, fio fino
  ((0.38,0.05,0.12), 0.55, 0.16, 1.1, 1, 0.060, 0.9),   # vinho, véu largo
  ((0.85,0.45,0.10), 0.68, 0.08, 2.1, 3, 0.006, 0.6),   # cobre
  ((0.45,0.07,0.14), 0.40, 0.12, 0.9, 2, 0.080, 0.55),  # vinho alto
]
p = subprocess.Popen(["ffmpeg","-loglevel","error","-y","-f","rawvideo","-pix_fmt","rgb24","-s",f"{W}x{H}","-r",str(FPS),"-i","-",
  "-vf","scale=1600:-2:flags=bicubic","-c:v","libx264","-pix_fmt","yuv420p","-crf","24","-preset","slow","-movflags","+faststart","-an","/home/claude/edz-bg/fundo.mp4"],stdin=subprocess.PIPE)
for f in range(N):
    t = 2*np.pi*f/N
    # deformação suave do espaço (líquido)
    wu = u + 0.05*np.sin(2.0*v*np.pi + t) + 0.03*np.sin(3.0*u*np.pi - 2*t)
    img = np.zeros((H,W,3),np.float32)
    for i,(cor,base,amp,fr,vel,larg,br) in enumerate(FAIXAS):
        yc = base + amp*np.sin(fr*2*np.pi*wu + vel*t + i*1.7) + 0.04*np.sin(3.1*np.pi*wu - vel*t + i)
        yc = yc - 0.18*(u-0.5)  # leve diagonal
        w = larg*(1+0.6*np.sin(2*np.pi*wu*1.3 + t + i))
        d = (v-yc)/np.maximum(w,1e-3)
        g = np.exp(-d*d)*br + 0.25*br*larg/(np.abs(v-yc)+larg*3)  # núcleo + brilho difuso
        img += g[...,None]*np.array(cor,np.float32)
    img = bg + img*(0.55+0.45*(u[...,None]))           # mais luz à direita (texto fica à esquerda)
    img = 1-np.exp(-img*1.6)                             # tone map
    p.stdin.write((np.clip(img,0,1)*255).astype(np.uint8).tobytes())
    if f%60==0: print(f,file=sys.stderr)
p.stdin.close(); p.wait()
