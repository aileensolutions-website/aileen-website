"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBgFlux({ side = "right" }) {
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
    let accents = [];
    let frameBudget = 1000 / 28;

    function onMouseMove(event) {
      M.x = event.clientX / window.innerWidth;
      M.y = event.clientY / window.innerHeight;
      M.active = true;
    }

    function onMouseLeave() {
      M.active = false;
    }

    function mapX(x) {
      return side === "left" ? x : W - x;
    }

    function mapPoint(point) {
      return { x: mapX(point.x), y: point.y };
    }

    function resize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      isMobile = vw <= 768;
      DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.1 : 1.35);
      frameBudget = 1000 / (isMobile ? 24 : 28);
      W = canvas.width = vw * DPR;
      H = canvas.height = vh * DPR;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      accents = Array.from({ length: isMobile ? 5 : 8 }, () => ({
        y: 0.1 + Math.random() * 0.8,
        length: 0.08 + Math.random() * 0.14,
        alpha: 0.03 + Math.random() * 0.05,
        phase: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.18,
      }));
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    resize();

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
      ct.fillStyle = isMobile ? "#081724" : "#05131f";
      ct.fillRect(0, 0, W, H);

      const sweep = ct.createLinearGradient(0, 0, W, H);
      sweep.addColorStop(0, "rgba(6,24,40,0.98)");
      sweep.addColorStop(0.34, "rgba(8,56,88,0.88)");
      sweep.addColorStop(0.72, "rgba(8,88,102,0.74)");
      sweep.addColorStop(1, "rgba(6,24,40,0.94)");
      ct.fillStyle = sweep;
      ct.fillRect(0, 0, W, H);

      const anchorGlowX = side === "left" ? W * 0.15 : W * 0.85;
      const innerGlowX = side === "left" ? W * 0.34 : W * 0.66;

      const glowA = ct.createRadialGradient(anchorGlowX, H * 0.18, 0, anchorGlowX, H * 0.18, W * 0.34);
      glowA.addColorStop(0, "rgba(48,176,255,0.28)");
      glowA.addColorStop(0.45, "rgba(30,118,232,0.13)");
      glowA.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = glowA;
      ct.fillRect(0, 0, W, H);

      const glowB = ct.createRadialGradient(innerGlowX, H * 0.66, 0, innerGlowX, H * 0.66, W * 0.28);
      glowB.addColorStop(0, "rgba(42,232,202,0.2)");
      glowB.addColorStop(0.45, "rgba(10,176,170,0.1)");
      glowB.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = glowB;
      ct.fillRect(0, 0, W, H);

      const wash = ct.createLinearGradient(0, H * 0.18, W, H * 0.82);
      wash.addColorStop(0, "rgba(76,214,255,0.02)");
      wash.addColorStop(0.3, "rgba(120,244,255,0.05)");
      wash.addColorStop(0.58, "rgba(34,226,176,0.05)");
      wash.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = wash;
      ct.fillRect(0, 0, W, H);

      const vignette = ct.createRadialGradient(W * 0.5, H * 0.52, W * 0.08, W * 0.5, H * 0.52, W * 0.8);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.68, "rgba(0,6,14,0.12)");
      vignette.addColorStop(1, "rgba(0,4,10,0.28)");
      ct.fillStyle = vignette;
      ct.fillRect(0, 0, W, H);

      const mx = M.active ? 0.5 + (M.sx - 0.5) * 0.12 : 0.5 + 0.015 * Math.sin(t * 0.08);
      const my = M.active ? 0.5 + (M.sy - 0.5) * 0.1 : 0.5 + 0.015 * Math.cos(t * 0.1);
      const cursorGlow = ct.createRadialGradient(W * mx, H * my, 0, W * mx, H * my, W * (isMobile ? 0.14 : 0.18));
      cursorGlow.addColorStop(0, "rgba(114,244,255,0.045)");
      cursorGlow.addColorStop(0.5, "rgba(34,184,216,0.015)");
      cursorGlow.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = cursorGlow;
      ct.fillRect(0, 0, W, H);
    }

    function drawRibbonBloom(cx, cy, radius) {
      const bloom = ct.createRadialGradient(cx, cy, 0, cx, cy, radius);
      bloom.addColorStop(0, "rgba(184,250,255,0.24)");
      bloom.addColorStop(0.32, "rgba(98,212,255,0.12)");
      bloom.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = bloom;
      ct.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
    }

    function drawRibbonFamily(t, intensity = 1, backdrop = false) {
      ct.save();
      ct.globalCompositeOperation = "screen";
      ct.lineCap = "round";
      ct.lineJoin = "round";

      const strands = backdrop ? (isMobile ? 6 : 9) : isMobile ? 10 : 14;
      const steps = isMobile ? 30 : 42;
      const anchor = W * (isMobile ? 0.16 : 0.18);
      const inward = W * (backdrop ? 0.34 : 0.28) * intensity;
      const spread = W * (backdrop ? 0.34 : 0.22) * intensity;
      const bend = W * (0.115 + 0.032 * Math.sin(t * 0.62));
      const topY = -H * 0.08;
      const bottomY = H * 1.08;
      const glowY = H * 0.5 + Math.sin(t * 0.44) * H * 0.015;

      if (!backdrop) {
        drawRibbonBloom(mapX(anchor + inward * 0.56), glowY, W * 0.18);
      }

      for (let i = 0; i < strands; i++) {
        const u = i / (strands - 1);
        const s = (u - 0.5) * 2;
        const inner = 1 - Math.abs(s);
        const wobble = Math.sin(t * 0.3 + s * 2.7) * W * 0.01;
        const phase = t * (0.62 + inner * 0.1);
        const twist = Math.sin(t * 0.78 + u * 3.6);
        const counterTwist = Math.cos(t * 0.64 - u * 4);
        const topSwing = Math.sin(phase + u * 2.1) * H * 0.016;
        const bottomSwing = Math.cos(phase * 0.9 - u * 2.3) * H * 0.02;
        const pinch = 0.8 + inner * 0.42;

        const p0 = { x: anchor - inward * 0.16 + s * spread * 0.14 + wobble * 0.42, y: topY };
        const p1 = {
          x: anchor + inward * (0.9 + inner * 0.16) - s * spread * (0.7 + twist * 0.08) + twist * bend * 0.42,
          y: H * 0.25 + topSwing - s * H * 0.08 * pinch,
        };
        const p2 = {
          x: anchor + inward * (0.18 + inner * 0.1) + s * spread * (0.48 + counterTwist * 0.08) - counterTwist * bend * 0.38,
          y: H * 0.75 + bottomSwing + s * H * 0.1 * pinch,
        };
        const p3 = { x: anchor - inward * 0.05 + s * spread * 0.24 - wobble * 0.3, y: bottomY };

        const a0 = mapPoint(p0);
        const a1 = mapPoint(p1);
        const a2 = mapPoint(p2);
        const a3 = mapPoint(p3);

        for (let step = 0; step < steps - 1; step++) {
          const pA = step / (steps - 1);
          const pB = (step + 1) / (steps - 1);
          const pt1 = cubicPoint(a0, a1, a2, a3, pA);
          const pt2 = cubicPoint(a0, a1, a2, a3, pB);
          const glow = Math.exp(-Math.pow(pA - 0.5, 2) / 0.028);
          const ripple = 0.5 + 0.5 * Math.sin(pA * Math.PI * 2 + phase + s * 2.2);
          const r = Math.round(110 + 36 * ripple);
          const g = Math.round(206 + 32 * ripple);
          const b = Math.round(248 + 7 * ripple);
          const alpha =
            (backdrop ? 0.008 : 0.014) * intensity +
            inner * (backdrop ? 0.048 : 0.12) +
            glow * (backdrop ? 0.012 : 0.07);

          if (!backdrop) {
            ct.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.2})`;
            ct.lineWidth = DPR * (1.35 + inner * 0.4);
            ct.beginPath();
            ct.moveTo(pt1.x, pt1.y);
            ct.lineTo(pt2.x, pt2.y);
            ct.stroke();
          }

          ct.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ct.lineWidth = DPR * ((backdrop ? 0.5 : 0.72) + inner * (backdrop ? 0.12 : 0.22));
          ct.beginPath();
          ct.moveTo(pt1.x, pt1.y);
          ct.lineTo(pt2.x, pt2.y);
          ct.stroke();
        }
      }

      if (!backdrop) {
        for (let i = 0; i < 2; i++) {
          const p = (t * (0.045 + i * 0.01) + i * 0.28) % 1;
          const point = cubicPoint(
            mapPoint({ x: anchor - inward * 0.14, y: topY }),
            mapPoint({ x: anchor + inward * 0.82, y: H * 0.28 }),
            mapPoint({ x: anchor + inward * 0.24, y: H * 0.72 }),
            mapPoint({ x: anchor, y: bottomY }),
            p,
          );
          const glow = ct.createRadialGradient(point.x, point.y, 0, point.x, point.y, W * 0.024);
          glow.addColorStop(0, "rgba(218,255,248,0.28)");
          glow.addColorStop(0.34, "rgba(108,236,255,0.1)");
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ct.fillStyle = glow;
          ct.fillRect(point.x - W * 0.04, point.y - W * 0.04, W * 0.08, W * 0.08);
        }
      }

      ct.restore();
    }

    function drawEdgeWash(t) {
      ct.save();
      ct.globalCompositeOperation = "screen";
      const beamX = side === "left" ? W * 0.22 : W * 0.78;
      const beam = ct.createRadialGradient(beamX, H * 0.5, 0, beamX, H * 0.5, W * 0.38);
      beam.addColorStop(0, "rgba(106,220,255,0.08)");
      beam.addColorStop(0.42, "rgba(64,246,206,0.04)");
      beam.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = beam;
      ct.fillRect(0, 0, W, H);

      const veil = ct.createLinearGradient(0, 0, W, 0);
      veil.addColorStop(0, "rgba(0,0,0,0)");
      veil.addColorStop(0.5, "rgba(0,18,28,0.02)");
      veil.addColorStop(1, "rgba(0,0,0,0)");
      ct.fillStyle = veil;
      ct.fillRect(0, 0, W, H);

      ct.restore();
    }

    function drawAccentTrails(t) {
      ct.save();
      ct.globalCompositeOperation = "screen";

      for (const accent of accents) {
        const drift = ((t * accent.speed + accent.phase) % 1) * (W * 0.24);
        const y = accent.y * H;
        const baseX = side === "left" ? W * 0.08 : W * 0.92;
        const x1 = side === "left" ? baseX + drift : baseX - drift;
        const x2 = side === "left" ? x1 + W * accent.length : x1 - W * accent.length;
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.7 + accent.phase);

        const grad = ct.createLinearGradient(x1, y, x2, y);
        if (side === "left") {
          grad.addColorStop(0, `rgba(210,255,252,${accent.alpha * pulse})`);
          grad.addColorStop(1, "rgba(210,255,252,0)");
        } else {
          grad.addColorStop(0, "rgba(210,255,252,0)");
          grad.addColorStop(1, `rgba(210,255,252,${accent.alpha * pulse})`);
        }

        ct.beginPath();
        ct.moveTo(x1, y);
        ct.lineTo(x2, y + Math.sin(t * 0.8 + accent.phase) * H * 0.015);
        ct.strokeStyle = grad;
        ct.lineWidth = DPR * 0.9;
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

      M.sx += (M.x - M.sx) * 0.02;
      M.sy += (M.y - M.sy) * 0.02;

      drawBase(t);
      drawEdgeWash(t);
      drawRibbonFamily(t, 1.14, true);
      drawRibbonFamily(t, 1, false);
      drawAccentTrails(t);

      rafRef.current = requestAnimationFrame(loop);
    }

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
