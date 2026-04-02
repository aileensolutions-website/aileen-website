"use client";

import { useEffect, useRef } from "react";
import AnimatedBg from "./AnimatedBg";

const rpaIcon = "/img/home/productsSolutions/RPA.svg";
const heroImage = "/img/home/cube.png";

const heroTags = [
  "24/7 Digital Worker",
  "Mouse & Keyboard Actions",
  "Cross-System Workflow",
];

const previewSteps = [
  {
    title: "Observe",
    body: "อ่านข้อมูลจากหน้าจอหรือระบบต้นทางตามกติกาที่กำหนด",
  },
  {
    title: "Execute",
    body: "คลิก พิมพ์ และทำขั้นตอนเดิมซ้ำได้อย่างแม่นยำสม่ำเสมอ",
  },
  {
    title: "Transfer",
    body: "ย้ายข้อมูลระหว่างหลายระบบให้เสร็จเร็วขึ้นโดยไม่ต้องทำมือ",
  },
];

const floatingLabels = [
  { label: "Click Actions", className: "left-0 top-14 hidden md:flex" },
  { label: "Rule-Based Flow", className: "right-4 top-8 hidden lg:flex" },
  { label: "24/7 Runtime", className: "right-0 bottom-16 hidden md:flex" },
];

export default function RpaHeroSection() {
  const sectionRef = useRef(null);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    let rafId;

    const tick = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

      const { x, y } = currentRef.current;
      const rotateX = (50 - y) * 0.08;
      const rotateY = (x - 50) * 0.11;
      const floatX = (x - 50) * 0.18;
      const floatY = (y - 50) * 0.18;

      element.style.setProperty("--mx", `${x}%`);
      element.style.setProperty("--my", `${y}%`);
      element.style.setProperty("--rx", rotateX.toFixed(2));
      element.style.setProperty("--ry", rotateY.toFixed(2));
      element.style.setProperty("--fx", floatX.toFixed(2));
      element.style.setProperty("--fy", floatY.toFixed(2));

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 50, y: 50 };
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[84vh] overflow-hidden bg-[#041824] px-6 pb-16 pt-28 text-white md:min-h-[82vh] md:px-10 md:pb-20 md:pt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mx": "50%",
        "--my": "50%",
        "--rx": "0",
        "--ry": "0",
        "--fx": "0",
        "--fy": "0",
      }}
    >
      <div className="absolute inset-0 opacity-95">
        <AnimatedBg />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28)_0%,rgba(2,6,23,0.08)_28%,rgba(2,6,23,0.18)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at var(--mx) var(--my), rgba(56,189,248,0.18), transparent 22%), radial-gradient(circle at calc(100% - var(--mx)) calc(var(--my) * 0.8), rgba(16,185,129,0.16), transparent 28%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rpa-hero__copy max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            AI & Automation Service
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[0.96] tracking-tight md:text-6xl">
            Robotic Process
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100/80 md:text-base">
            Robotic Process Automation (RPA) คือหุ่นยนต์ซอฟต์แวร์ (Bot)
            ที่ช่วยทำงานซ้ำ ๆ บนคอมพิวเตอร์ ทำหน้าที่เป็นผู้ช่วยส่วนตัวอัตโนมัติ
            สามารถทำงานตามการคลิกเมาส์หรือกดคีย์บอร์ดได้ เหมาะกับงาน Routine
            ที่ต้องทำซ้ำทุกวัน ทุกสัปดาห์ หรือทุกเดือน โดย Bot
            ช่วยให้ทุกขั้นตอนแม่นยำ รวดเร็ว และทำงานได้ต่อเนื่องตลอด 24 ชั่วโมง 7 วัน
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className="rpa-hero__tag inline-flex items-center rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#always-on"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Explore Key Value
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View Benefits
            </a>
          </div>
        </div>

        <div className="rpa-hero__visual relative mx-auto w-full max-w-[560px]">
          {floatingLabels.map((item, index) => (
            <div
              key={item.label}
              className={`absolute z-10 items-center gap-2 rounded-full border border-white/12 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/82 backdrop-blur ${item.className}`}
              style={{
                transform:
                  index % 2 === 0
                    ? "translate3d(calc(var(--fx) * -0.35px), calc(var(--fy) * -0.25px), 0)"
                    : "translate3d(calc(var(--fx) * 0.3px), calc(var(--fy) * -0.3px), 0)",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {item.label}
            </div>
          ))}

          <div
            className="relative rounded-[34px] border border-white/12 bg-white/8 p-4 shadow-[0_28px_90px_rgba(2,6,23,0.36)] backdrop-blur-xl"
            style={{
              transform:
                "perspective(1400px) rotateX(calc(var(--rx) * 1deg)) rotateY(calc(var(--ry) * 1deg)) translate3d(calc(var(--fx) * 0.5px), calc(var(--fy) * -0.5px), 0)",
              transition: "transform 120ms ease-out",
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(13,53,72,0.95),rgba(11,84,96,0.78)_62%,rgba(18,148,126,0.62))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_80%_82%,rgba(34,197,94,0.12),transparent_24%)]" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />

              <div className="absolute left-5 top-5 right-5 flex items-center justify-between gap-4 rounded-[22px] border border-white/12 bg-slate-950/24 px-4 py-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-white/10">
                    <img src={rpaIcon} alt="RPA" className="h-9 w-9" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                      Bot Workspace
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-white">Automation in Motion</h2>
                  </div>
                </div>
                <div className="hidden rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100 lg:block">
                  Live Preview
                </div>
              </div>

              <div
                className="rpa-hero__orb absolute right-[6%] top-[18%] w-[52%] max-w-[290px]"
                style={{
                  transform:
                    "translate3d(calc(var(--fx) * 0.55px), calc(var(--fy) * -0.45px), 0)",
                }}
              >
                <img
                  src={heroImage}
                  alt="RPA automation visual"
                  className="w-full object-contain drop-shadow-[0_22px_55px_rgba(10,20,35,0.5)]"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {previewSteps.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-slate-950/24 p-4 backdrop-blur"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/66">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/84">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rpaHeroReveal {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rpaVisualFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .rpa-hero__copy {
          animation: rpaHeroReveal 0.82s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .rpa-hero__visual {
          animation: rpaHeroReveal 0.96s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
        }

        .rpa-hero__tag {
          animation: rpaHeroReveal 0.72s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .rpa-hero__orb {
          animation: rpaVisualFloat 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
