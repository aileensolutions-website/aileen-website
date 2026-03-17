import { useEffect, useRef } from "react";

export default function AnimatedWaveBg() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const mouseRef  = useRef({ x: 0.5, y: 0.5, sx: 0.5, sy: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ct     = canvas.getContext("2d");
    const DPR    = window.devicePixelRatio || 1;
    let W, H;

    const M = mouseRef.current;

    function onMouseMove(e) {
      M.x = e.clientX / window.innerWidth;
      M.y = e.clientY / window.innerHeight;
      M.active = true;
    }
    function onMouseLeave() { M.active = false; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    /* ── resize ── */
    function resize() {
      W = canvas.width  = window.innerWidth  * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width  = window.innerWidth  + "px";
      canvas.style.height = window.innerHeight + "px";
      buildCircuits();
    }
    window.addEventListener("resize", resize);

    /* ════════════════════════════════
       BACKGROUND + mouse-reactive glows
    ════════════════════════════════ */
    function drawBg(t) {
      const bg = ct.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0,   "#04101e");
      bg.addColorStop(0.4, "#061829");
      bg.addColorStop(0.8, "#082233");
      bg.addColorStop(1,   "#0b2b3d");
      ct.fillStyle = bg;
      ct.fillRect(0, 0, W, H);

      /* BL glow — autonomous slow drift */
      const blX = W * (-0.04 + 0.05 * Math.sin(t * 0.11));
      const blY = H * (1.10  - 0.04 * Math.sin(t * 0.13));
      const bl  = ct.createRadialGradient(blX, blY, 0, W * 0.07, H * 0.91, W * 0.52);
      bl.addColorStop(0,   "rgba(0, 193, 200, 0.6)");
      bl.addColorStop(0.3, "rgba(0, 138, 162, 0.25)");
      bl.addColorStop(1,   "rgba(0,0,0,0)");
      ct.fillStyle = bl;
      ct.fillRect(0, 0, W, H);

      /* TR glow — parallax with mouse */
      const mx  = M.active ? M.sx : 0.5 + 0.04 * Math.sin(t * 0.09);
      const my  = M.active ? M.sy : 0.5 + 0.03 * Math.sin(t * 0.11);
      const trX = W * (1.12 - (mx - 0.5) * 0.18);
      const trY = H * (-0.10 + (my - 0.5) * 0.14);
      const tr  = ct.createRadialGradient(trX, trY, 0, W * 0.87, H * 0.14, W * 0.44);
      tr.addColorStop(0,    "rgba(48,228,210,0.88)");
      tr.addColorStop(0.14, "rgba(34,214,190,0.60)");
      tr.addColorStop(0.42, "rgba(17,174,150,0.22)");
      tr.addColorStop(1,    "rgba(0,0,0,0)");
      ct.fillStyle = tr;
      ct.fillRect(0, 0, W, H);

      /* mouse spotlight */
      if (M.active) {
        const sx = M.sx * W, sy = M.sy * H;
        const sp = ct.createRadialGradient(sx, sy, 0, sx, sy, W * 0.38);
        sp.addColorStop(0,   "rgba(20,180,200,0.09)");
        sp.addColorStop(0.4, "rgba(10,140,170,0.04)");
        sp.addColorStop(1,   "rgba(0,0,0,0)");
        ct.fillStyle = sp;
        ct.fillRect(0, 0, W, H);

        const ta = ct.createRadialGradient(sx, sy, 0, sx, sy, W * 0.12);
        ta.addColorStop(0, "rgba(60,220,200,0.06)");
        ta.addColorStop(1, "rgba(0,0,0,0)");
        ct.fillStyle = ta;
        ct.fillRect(0, 0, W, H);
      }

      /* counter-parallax orb */
      const aox = W * (0.80 - (mx - 0.5) * 0.08 + 0.06 * Math.cos(t * 0.07));
      const aoy = H * (0.30 - (my - 0.5) * 0.06 + 0.05 * Math.sin(t * 0.09));
      const ao  = ct.createRadialGradient(aox, aoy, 0, aox, aoy, W * 0.22);
      ao.addColorStop(0, "rgba(0,160,200,0.055)");
      ao.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = ao;
      ct.fillRect(0, 0, W, H);
    }

    /* ════════════════════════════════
       AURORA RIBBONS
    ════════════════════════════════ */
    function drawAurora(t) {
      ct.save();
      const bands = [
        { yBase: 0.25, amp: 0.10, freq: 0.55, spd: 0.08, phase: 0.0, color: "rgba(0,180,160,"  },
        { yBase: 0.50, amp: 0.08, freq: 0.40, spd: 0.06, phase: 2.1, color: "rgba(0,140,200,"  },
        { yBase: 0.75, amp: 0.12, freq: 0.65, spd: 0.10, phase: 4.3, color: "rgba(20,160,140," },
      ];
      for (const b of bands) {
        ct.beginPath();
        for (let pi = 0; pi <= 200; pi++) {
          const nx = pi / 200;
          const y  = H * (b.yBase + b.amp * Math.sin(nx * Math.PI * b.freq * 4 + t * b.spd + b.phase));
          pi === 0 ? ct.moveTo(0, y) : ct.lineTo(nx * W, y);
        }
        ct.lineTo(W, H); ct.lineTo(0, H); ct.closePath();
        const gy = ct.createLinearGradient(0, H * (b.yBase - b.amp - 0.05), 0, H * (b.yBase + b.amp + 0.05));
        gy.addColorStop(0,    b.color + "0)");
        gy.addColorStop(0.45, b.color + "0.032)");
        gy.addColorStop(0.55, b.color + "0.032)");
        gy.addColorStop(1,    b.color + "0)");
        ct.fillStyle = gy;
        ct.fill();
      }
      ct.restore();
    }

    /* ════════════════════════════════
       CIRCUIT TRACES
    ════════════════════════════════ */
    let circuits = [];
    function buildCircuits() {
      circuits = [];
      for (let i = 0; i < 9; i++) {
        const x0 = Math.random() * W, y0 = Math.random() * H;
        const l1 = (45 + Math.random() * 100) * DPR;
        const l2 = (45 + Math.random() * 100) * DPR;
        const d1 = Math.floor(Math.random() * 4);
        const xc = x0 + (d1 === 0 ? l1 : d1 === 2 ? -l1 : 0);
        const yc = y0 + (d1 === 1 ? l1 : d1 === 3 ? -l1 : 0);
        const d2 = (d1 + 1 + (Math.random() < 0.5 ? 0 : 2)) % 4;
        circuits.push({
          x0, y0, xc, yc,
          xe: xc + (d2 === 0 ? l2 : d2 === 2 ? -l2 : 0),
          ye: yc + (d2 === 1 ? l2 : d2 === 3 ? -l2 : 0),
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
        });
      }
    }
    function drawCircuits(t) {
      ct.save();
      ct.lineWidth = 0.7 * DPR;
      ct.lineCap   = "round";
      for (const c of circuits) {
        const pulse = 0.5 + 0.5 * Math.sin(t * c.speed + c.phase);
        const a     = 0.03 + pulse * 0.08;
        ct.strokeStyle = `rgba(80,210,195,${a})`;
        ct.beginPath(); ct.moveTo(c.x0, c.y0); ct.lineTo(c.xc, c.yc); ct.lineTo(c.xe, c.ye); ct.stroke();
        ct.fillStyle = `rgba(120,230,220,${a * 1.8})`;
        ct.beginPath(); ct.arc(c.xc, c.yc, 2.5 * DPR, 0, Math.PI * 2); ct.fill();
      }
      ct.restore();
    }

    /* ════════════════════════════════
       DATA STREAMS
    ════════════════════════════════ */
    const streams = Array.from({ length: 14 }, (_, i) => ({
      x:     (i + 0.5) / 14,
      y:     Math.random(),
      speed: 0.015 + Math.random() * 0.020,
      len:   0.04  + Math.random() * 0.09,
      alpha: 0.035 + Math.random() * 0.08,
      w:     (0.3  + Math.random() * 0.5) * DPR,
    }));
    function drawStreams(t) {
      ct.save();
      for (const s of streams) {
        const x   = s.x * W;
        const y   = ((s.y + t * s.speed) % 1) * H;
        const len = s.len * H;
        const g   = ct.createLinearGradient(0, y, 0, y + len);
        g.addColorStop(0,   "rgba(80,210,195,0)");
        g.addColorStop(0.4, `rgba(80,210,195,${s.alpha})`);
        g.addColorStop(1,   "rgba(80,210,195,0)");
        ct.strokeStyle = g; ct.lineWidth = s.w;
        ct.beginPath(); ct.moveTo(x, y); ct.lineTo(x, y + len); ct.stroke();
      }
      ct.restore();
    }

    /* ════════════════════════════════
       SCAN LINE
    ════════════════════════════════ */
    function drawScan(t) {
      const sy = ((t * 0.07) % 1) * H;
      const sc = ct.createLinearGradient(0, sy - 50 * DPR, 0, sy + 50 * DPR);
      sc.addColorStop(0,   "rgba(80,200,190,0)");
      sc.addColorStop(0.5, "rgba(80,200,190,0.018)");
      sc.addColorStop(1,   "rgba(80,200,190,0)");
      ct.fillStyle = sc;
      ct.fillRect(0, sy - 50 * DPR, W, 100 * DPR);
    }

    /* ════════════════════════════════
       CORNER BRACKETS
    ════════════════════════════════ */
    function drawCorners() {
      const sz = 20 * DPR, gp = 11 * DPR;
      ct.save();
      ct.strokeStyle = "rgba(80,210,195,0.16)";
      ct.lineWidth   = 1.2 * DPR;
      [[gp, gp, 1, 1], [W - gp, gp, -1, 1], [gp, H - gp, 1, -1], [W - gp, H - gp, -1, -1]]
        .forEach(([cx, cy, dx, dy]) => {
          ct.beginPath();
          ct.moveTo(cx, cy + dy * sz);
          ct.lineTo(cx, cy);
          ct.lineTo(cx + dx * sz, cy);
          ct.stroke();
        });
      ct.restore();
    }

    /* ════════════════════════════════
       WAVE RIBBON — original unchanged
    ════════════════════════════════ */
    function sEnv(nx) {
      const knots = [
        { x: 0.80, y:  0.90 },
        { x: 0.05, y: -1.00 },
        { x: 0.65, y:  0.55 },
        { x: 1.00, y:  0.10 },
      ];
      let seg = 0;
      for (let k = 0; k < knots.length - 1; k++) {
        if (nx <= knots[k + 1].x) { seg = k; break; }
      }
      const k0 = knots[seg], k1 = knots[seg + 1];
      const nt = (nx - k0.x) / (k1.x - k0.x);
      const f  = (1 - Math.cos(nt * Math.PI)) * 0.5;
      return k0.y + (k1.y - k0.y) * f;
    }

    const N    = 32, LINE_GAP = 1 * DPR;
    const FREQ = Math.PI * 2.6, SPEED = 0.36, PHASE_SPREAD = Math.PI * 1.35;

    function drawFrame(t) {
      const nPts   = Math.ceil(W / 2) + 1;
      const sDrift = H * 0.018 * Math.sin(t * 0.19);
      const baseY  = H * 0.62, sAmp = H * 0.22;
      const ampBot = H * 0.030, ampTop = H * 0.160;

      ct.save();
      ct.lineCap  = "round";
      ct.lineJoin = "round";

      for (let i = 0; i < N; i++) {
        const u         = i / (N - 1);
        const amp       = ampBot + u * (ampTop - ampBot);
        const phase     = u * PHASE_SPREAD;
        const ribbonOff = (u - 0.5) * LINE_GAP * (N - 1);
        const drift     = H * 0.014 * Math.sin(t * 0.17 + u * 1.1);
        const c         = Math.sin(u * Math.PI);
        const alpha     = 0.14 + c * 0.60;
        const lw        = (0.42 + c * 0.68) * DPR;

        const grad = ct.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0.00, `rgba(185,238,255,${alpha * 0.50})`);
        grad.addColorStop(0.30, `rgba(210,245,255,${alpha * 0.88})`);
        grad.addColorStop(0.55, `rgba(232,251,255,${alpha})`);
        grad.addColorStop(0.80, `rgba(212,244,255,${alpha * 0.80})`);
        grad.addColorStop(1.00, `rgba(192,237,255,${alpha * 0.45})`);

        ct.beginPath();
        for (let pi = 0; pi < nPts; pi++) {
          const x  = pi * 2;
          const nx = x / W;
          const y  = baseY + sEnv(nx) * sAmp + sDrift + ribbonOff + drift
                   + Math.sin(nx * FREQ - t * SPEED + phase) * amp
                   + Math.sin(nx * FREQ * 0.248 + t * 0.19 - phase * 0.80) * amp * 0.58;
          pi === 0 ? ct.moveTo(x, y) : ct.lineTo(x, y);
        }
        ct.strokeStyle = grad;
        ct.lineWidth   = lw;
        ct.stroke();
      }
      ct.restore();
    }

    /* ════════════════════════════════
       LOOP
    ════════════════════════════════ */
    resize();
    let t0 = null;
    function loop(ts) {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000;
      M.sx += (M.x - M.sx) * 0.05;
      M.sy += (M.y - M.sy) * 0.05;
      drawBg(t);
      drawAurora(t);
      drawCircuits(t);
      drawStreams(t);
      drawScan(t);
      drawFrame(t);
      drawCorners();
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}