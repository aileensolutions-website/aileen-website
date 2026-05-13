"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBgContour() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, sx: 0.5, sy: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ct = canvas.getContext("2d");
    if (!ct) return undefined;

    let DPR = 1;
    const M = mouseRef.current;
    let W = 0;
    let H = 0;
    let isMobile = false;
    let dust = [];
    let frameBudget = 1000 / 32;

    function onMouseMove(event) {
      M.x = event.clientX / window.innerWidth;
      M.y = event.clientY / window.innerHeight;
      M.active = true;
    }

    function onMouseLeave() {
      M.active = false;
    }

    function resize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      isMobile = vw <= 768;
      DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.1 : 1.35);
      frameBudget = 1000 / (isMobile ? 26 : 32);
      W = canvas.width = vw * DPR;
      H = canvas.height = vh * DPR;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      dust = Array.from({ length: isMobile ? 10 : 18 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: (0.7 + Math.random() * 1.5) * DPR,
        alpha: 0.04 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function cubicPoint(p0, p1, p2, p3, t) {
      const mt = 1 - t;
      const mt2 = mt * mt;
      const t2 = t * t;
      return {
        x: mt2 * mt * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t2 * t * p3.x,
        y: mt2 * mt * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t2 * t * p3.y,
      };
    }

    function drawBase(t) {
      ct.fillStyle = isMobile ? "#07121d" : "#04101a";
      ct.fillRect(0, 0, W, H);

      const grad = ct.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "rgba(5,20,34,0.99)");
      grad.addColorStop(0.38, "rgba(7,34,58,0.95)");
      grad.addColorStop(0.72, "rgba(7,24,42,0.97)");
      grad.addColorStop(1, "rgba(4,16,26,0.99)");
      ct.fillStyle = grad;
      ct.fillRect(0, 0, W, H);

      const leftGlow = ct.createRadialGradient(W * 0.18, H * 0.16, 0, W * 0.18, H * 0.16, W * 0.42);
      leftGlow.addColorStop(0, "rgba(45,156,255,0.18)");
      leftGlow.addColorStop(0.42, "rgba(22,98,194,0.08)");
      leftGlow.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = leftGlow;
      ct.fillRect(0, 0, W, H);

      const rightGlow = ct.createRadialGradient(W * 0.78, H * 0.8, 0, W * 0.78, H * 0.8, W * 0.44);
      rightGlow.addColorStop(0, "rgba(0,205,176,0.15)");
      rightGlow.addColorStop(0.4, "rgba(0,126,148,0.06)");
      rightGlow.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = rightGlow;
      ct.fillRect(0, 0, W, H);

      const mx = M.active ? M.sx : 0.54 + 0.03 * Math.sin(t * 0.08);
      const my = M.active ? M.sy : 0.48 + 0.03 * Math.cos(t * 0.1);
      const pointer = ct.createRadialGradient(W * mx, H * my, 0, W * mx, H * my, W * 0.22);
      pointer.addColorStop(0, "rgba(102,228,245,0.06)");
      pointer.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = pointer;
      ct.fillRect(0, 0, W, H);
    }

    function drawBaseHighlights() {
      ct.save();
      ct.globalCompositeOperation = "screen";
      const beam = ct.createLinearGradient(0, H * 0.5, W, H * 0.5);
      beam.addColorStop(0, "rgba(0,0,0,0)");
      beam.addColorStop(0.26, "rgba(86,166,255,0.03)");
      beam.addColorStop(0.5, "rgba(160,238,255,0.05)");
      beam.addColorStop(0.72, "rgba(74,236,222,0.03)");
      beam.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = beam;
      ct.fillRect(0, H * 0.37, W, H * 0.3);
      ct.restore();
    }

    function drawRibbonField(t, backdrop = false) {
      ct.save();
      ct.globalCompositeOperation = "screen";
      ct.lineCap = "round";
      ct.lineJoin = "round";

      const strands = backdrop ? (isMobile ? 8 : 12) : isMobile ? 13 : 18;
      const steps = isMobile ? 40 : 56;
      const cy = H * (0.54 + (M.sy - 0.5) * 0.06);
      const bend = H * (0.14 + 0.05 * Math.sin(t * 0.62));
      const spread = H * (backdrop ? 0.34 : 0.24);
      const leftX = -W * 0.08;
      const rightX = W * 1.08;
      const glowX = W * 0.5;

      if (!backdrop) {
        const bloom = ct.createRadialGradient(glowX, cy, 0, glowX, cy, W * 0.24);
        bloom.addColorStop(0, "rgba(152,242,255,0.18)");
        bloom.addColorStop(0.34, "rgba(82,160,255,0.1)");
        bloom.addColorStop(1, "rgba(0,0,0,0)");
        ct.fillStyle = bloom;
        ct.fillRect(glowX - W * 0.26, cy - W * 0.26, W * 0.52, W * 0.52);
      }

      for (let i = 0; i < strands; i++) {
        const u = i / (strands - 1);
        const s = (u - 0.5) * 2;
        const inner = 1 - Math.abs(s);
        const waveA = Math.sin(t * 0.72 + s * 2.4) * H * 0.022;
        const waveB = Math.cos(t * 0.48 - s * 3.2) * H * 0.018;
        const wobble = waveA + waveB;
        const upperPulse = Math.sin(t * 0.54 + u * 4.4) * H * 0.034;
        const lowerPulse = Math.cos(t * 0.66 - u * 4.2) * H * 0.036;

        const p0 = { x: leftX, y: cy - bend * 0.74 + s * spread * 0.34 + wobble };
        const p1 = { x: W * 0.28, y: cy - bend * 0.2 - s * spread * 0.82 + upperPulse };
        const p2 = { x: W * 0.72, y: cy + bend * 0.2 + s * spread * 0.82 + lowerPulse };
        const p3 = { x: rightX, y: cy + bend * 0.74 - s * spread * 0.42 - wobble * 0.72 };

        for (let step = 0; step < steps - 1; step++) {
          const pA = step / (steps - 1);
          const pB = (step + 1) / (steps - 1);
          const pt1 = cubicPoint(p0, p1, p2, p3, pA);
          const pt2 = cubicPoint(p0, p1, p2, p3, pB);
          const glow = Math.exp(-Math.pow(pA - 0.5, 2) / 0.028);
          const hueMix = 0.5 + 0.5 * Math.sin(pA * Math.PI * 2 + u * 4.4);
          const r = Math.round(76 + 40 * hueMix);
          const g = Math.round(146 + 84 * hueMix);
          const b = 255;
          const alpha =
            (backdrop ? 0.01 : 0.02) +
            inner * (backdrop ? 0.05 : 0.12) +
            glow * (backdrop ? 0.012 : 0.08);

          if (!backdrop) {
            ct.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.24})`;
            ct.lineWidth = DPR * (1.45 + inner * 0.48);
            ct.beginPath();
            ct.moveTo(pt1.x, pt1.y);
            ct.lineTo(pt2.x, pt2.y);
            ct.stroke();
          }

          ct.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ct.lineWidth = DPR * ((backdrop ? 0.55 : 0.82) + inner * (backdrop ? 0.16 : 0.28));
          ct.beginPath();
          ct.moveTo(pt1.x, pt1.y);
          ct.lineTo(pt2.x, pt2.y);
          ct.stroke();
        }
      }

      ct.restore();
    }

    function drawCornerFields(t) {
      ct.save();
      ct.globalCompositeOperation = "screen";
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.24);

      const top = ct.createLinearGradient(0, 0, W, H * 0.3);
      top.addColorStop(0, "rgba(84,156,255,0.05)");
      top.addColorStop(0.5, `rgba(60,120,255,${0.03 + pulse * 0.02})`);
      top.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = top;
      ct.fillRect(0, 0, W, H * 0.34);

      const bottom = ct.createLinearGradient(0, H, W, H * 0.68);
      bottom.addColorStop(0, "rgba(0,0,0,0)");
      bottom.addColorStop(0.5, `rgba(74,236,222,${0.025 + pulse * 0.018})`);
      bottom.addColorStop(1, "rgba(74,146,255,0.04)");
      ct.fillStyle = bottom;
      ct.fillRect(0, H * 0.64, W, H * 0.36);
      ct.restore();
    }

    function drawNodes(t) {
      ct.save();
      ct.globalCompositeOperation = "lighter";

      const points = [
        { x: 0.34, y: 0.36, r: 0.024 },
        { x: 0.52, y: 0.54, r: 0.032 },
        { x: 0.68, y: 0.66, r: 0.024 },
      ];

      for (const point of points) {
        const x = W * point.x;
        const y = H * point.y;
        const glow = ct.createRadialGradient(x, y, 0, x, y, W * point.r);
        glow.addColorStop(0, "rgba(210,252,255,0.34)");
        glow.addColorStop(0.32, "rgba(84,208,255,0.12)");
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ct.fillStyle = glow;
        ct.fillRect(x - W * point.r, y - W * point.r, W * point.r * 2, W * point.r * 2);
      }

      ct.restore();
    }

    function drawDust(t) {
      ct.save();
      for (const star of dust) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.8 + star.phase);
        const x = star.x * W;
        const y = star.y * H;
        ct.beginPath();
        ct.arc(x, y, star.r, 0, Math.PI * 2);
        ct.fillStyle = `rgba(176,238,255,${star.alpha * pulse})`;
        ct.fill();
      }
      ct.restore();
    }

    function drawFrameHints(t) {
      ct.save();
      ct.strokeStyle = "rgba(182,230,255,0.03)";
      ct.lineWidth = DPR * 0.7;

      const inset = isMobile ? 18 * DPR : 28 * DPR;
      ct.strokeRect(inset, inset, W - inset * 2, H - inset * 2);

      for (let i = 0; i < 2; i++) {
        const alpha = 0.02 - i * 0.004;
        const y = H * (0.28 + i * 0.42) + Math.sin(t * 0.15 + i * 1.2) * H * 0.01;
        ct.beginPath();
        ct.moveTo(W * 0.1, y);
        ct.lineTo(W * 0.9, y);
        ct.strokeStyle = `rgba(182,230,255,${alpha})`;
        ct.stroke();
      }

      ct.restore();
    }

    function drawStarCrosses(t) {
      ct.save();
      ct.globalCompositeOperation = "screen";

      const marks = [
        { x: 0.18, y: 0.22, s: 1 },
        { x: 0.82, y: 0.18, s: 0.85 },
        { x: 0.72, y: 0.8, s: 0.75 },
      ];

      for (const mark of marks) {
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.7 + mark.x * 8);
        const x = W * mark.x;
        const y = H * mark.y;
        const len = DPR * 10 * mark.s;
        ct.beginPath();
        ct.moveTo(x - len, y);
        ct.lineTo(x + len, y);
        ct.moveTo(x, y - len);
        ct.lineTo(x, y + len);
        ct.strokeStyle = `rgba(180,242,255,${0.06 * pulse})`;
        ct.lineWidth = DPR * 0.55;
        ct.stroke();
      }

      ct.restore();
    }

    let t = 0;
    let lastTs = 0;
    let dtFiltered = 1 / 60;
    let lastRenderTs = 0;

    function loop(ts) {
      if (!lastTs) {
        lastTs = ts;
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      if (document.hidden) {
        lastTs = ts;
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      if (lastRenderTs && ts - lastRenderTs < frameBudget) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      let dt = (ts - lastTs) / 1000;
      lastTs = ts;
      dt = Math.max(1 / 240, Math.min(dt, 1 / 30));
      dtFiltered += (dt - dtFiltered) * 0.12;
      t += dtFiltered;
      lastRenderTs = ts;

      M.sx += (M.x - M.sx) * 0.035;
      M.sy += (M.y - M.sy) * 0.035;

      drawBase(t);
      drawBaseHighlights();
      drawCornerFields(t);
      drawFrameHints(t);
      drawRibbonField(t, true);
      drawRibbonField(t, false);
      drawNodes(t);
      drawDust(t);
      drawStarCrosses(t);

      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    resize();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
