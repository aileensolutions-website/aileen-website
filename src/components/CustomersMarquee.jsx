"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const agc = "/img/home/customers/AGC.png";
const bangchak = "/img/home/customers/bangchak.svg";
const egat = "/img/home/customers/egat.png";
const gc = "/img/home/customers/GC.webp";
const ggc = "/img/home/customers/ggc.png";
const hmc = "/img/home/customers/HMC.png";
const logoPTT3 = "/img/home/customers/logo_PTT_3.png";
const npc = "/img/home/customers/npc.png";
const pttAsahi = "/img/home/customers/ptt-asahi.png";
const pttDigital = "/img/home/customers/ptt-digital.png";
const tex = "/img/home/customers/Tex.png";
const NOK = "/img/home/customers/NOK.png";

/* ── useInView hook ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function CustomersMarquee() {
  const logos = useMemo(
    () => [
      { src: pttDigital, alt: "PTT Digital" },
      { src: gc,         alt: "GC" },
      { src: agc,        alt: "AGC" },
      { src: ggc,        alt: "GGC" },
      { src: bangchak,   alt: "Bangchak" },
      { src: egat,       alt: "EGAT" },
      { src: hmc,        alt: "HMC Polymers" },
      { src: npc,        alt: "NPC" },
      { src: pttAsahi,   alt: "PTT Asahi" },
      { src: tex,        alt: "Thai Ethoxylate (TEX)" },
      { src: logoPTT3,   alt: "PTT Group" },
      { src: NOK,   alt: "NOK" },
    ],
    []
  );

  const [secRef, inView] = useInView(0.1);

  const trackRef     = useRef(null);
  const rafRef       = useRef(null);
  const posRef       = useRef(0);
  const speedRef     = useRef(0.7);
  const draggingRef  = useRef(false);
  const lastXRef     = useRef(0);

  const [paused,     setPaused]     = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const normalizePos = (pos, halfWidth) => {
    if (!halfWidth) return 0;
    let x = ((-pos % halfWidth) + halfWidth) % halfWidth;
    return -x;
  };

  useEffect(() => {
    const tick = () => {
      const track = trackRef.current;
      if (!track) return;
      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) { rafRef.current = requestAnimationFrame(tick); return; }
      if (!paused && !draggingRef.current) posRef.current -= speedRef.current;
      posRef.current = normalizePos(posRef.current, halfWidth);
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [paused]);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (!halfWidth) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    posRef.current += dx;
    posRef.current = normalizePos(posRef.current, halfWidth);
    track.style.transform = `translateX(${posRef.current}px)`;
  };
  const onPointerUp = () => { draggingRef.current = false; setIsDragging(false); };

  return (
    <section ref={secRef} className="w-full bg-white pt-20 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* ── pill badge ── */}
        <div className="flex justify-center pb-4">
          <span
            className={`cm-rv ${inView ? "on" : ""} inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-200 bg-white/5 px-4 py-2 text-xs tracking-widest backdrop-blur`}
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,.6)]" />
            OUR CUSTOMERS
          </span>
        </div>

        {/* ── heading ── */}
        <h2
          className={`cm-rv ${inView ? "on" : ""} text-center text-3xl font-extrabold tracking-tight`}
          style={{
            animationDelay: "80ms",
            background: "linear-gradient(90deg,#0f172a 60%,#10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ได้รับความไว้วางใจจากองค์กรชั้นนำ
        </h2>

        {/* ── accent line ── */}
        <span className={`cm-line ${inView ? "on" : ""}`} />

        {/* ── subtitle ── */}
        <p
          className={`cm-rv ${inView ? "on" : ""} mt-3 text-center text-sm font-light text-slate-500`}
          style={{ animationDelay: "160ms" }}
        >
          บริษัทชั้นนำในอุตสาหกรรมพลังงานและปิโตรเคมีที่ไว้วางใจ Aileen Solutions
        </p>
      </div>

      {/* ── marquee ── */}
      <div className={`cm-wrap-rv ${inView ? "on" : ""} mt-10 mx-auto max-w-6xl px-6`}>
        <div
          className="relative select-none overflow-hidden rounded-2xl bg-white"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* track */}
          <div
            ref={trackRef}
            className="flex items-center gap-16 will-change-transform px-10 md:px-14"
          >
            {logos.map((l, idx) => (
              <LogoItem key={`a-${idx}`} {...l} />
            ))}
            {logos.map((l, idx) => (
              <LogoItem key={`b-${idx}`} {...l} />
            ))}
          </div>

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-white via-white/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function LogoItem({ src, alt }) {
  return (
    <div className="group relative flex h-20 w-40 shrink-0 items-center justify-center overflow-visible">
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="cm-logo-item max-h-16 w-auto opacity-80 group-hover:opacity-100"
      />
      {/* Tooltip */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/70 px-5 py-1.5 text-sm border border-slate-200 text-slate-800 shadow-sm backdrop-blur-md opacity-0 transition duration-200 group-hover:opacity-100 z-20">
        {alt}
      </div>
    </div>
  );
}