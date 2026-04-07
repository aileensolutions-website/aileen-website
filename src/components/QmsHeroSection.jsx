"use client";

import { useEffect, useRef } from "react";
import AnimatedBg from "./AnimatedBgFlux";

const qmsIcon = "/img/home/productsSolutions/QMS.svg";

const heroTags = ["ISO-Ready Operations", "Audit & Compliance", "Centralized Quality Control"];

const featureHighlights = [
  {
    title: "Document Control",
    body: "ควบคุมเอกสาร เวอร์ชัน และขั้นตอนคุณภาพจากศูนย์กลางเดียว",
  },
  {
    title: "Audit Readiness",
    body: "ติดตามหลักฐานและสถานะงานได้ชัดเจน พร้อมรองรับการตรวจประเมิน",
  },
  {
    title: "Compliance Visibility",
    body: "มองเห็นความเสี่ยง การอนุมัติ และข้อกำหนดสำคัญได้แบบโปร่งใส",
  },
];

const floatingLabels = [
  { label: "ISO & Legal", className: "left-0 top-16 hidden md:flex" },
  { label: "Version Tracking", className: "right-4 top-10 hidden lg:flex" },
  { label: "Enterprise Security", className: "right-0 bottom-16 hidden md:flex" },
];

const miniModules = [
  "Document Management",
  "Audit Management",
  "Legal & Compliance",
  "NCR Workflow",
];

export default function QmsHeroSection() {
  const sectionRef = useRef(null);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    let rafId;

    const tick = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.045;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.045;

      const { x, y } = currentRef.current;
      const rotateX = (50 - y) * 0.035;
      const rotateY = (x - 50) * 0.045;
      const floatX = (x - 50) * 0.08;
      const floatY = (y - 50) * 0.08;

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
      className="relative isolate min-h-[92vh] overflow-hidden bg-[#041824] px-6 pb-10 pt-32 text-white md:min-h-[88vh] md:px-10 md:pb-20 md:pt-32 lg:pb-20 lg:pt-[190px]"
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
        <AnimatedBg side="left" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.30)_0%,rgba(2,6,23,0.08)_28%,rgba(2,6,23,0.16)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at var(--mx) var(--my), rgba(56,189,248,0.08), transparent 18%), radial-gradient(circle at calc(100% - var(--mx)) calc(var(--my) * 0.8), rgba(16,185,129,0.07), transparent 24%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="qms-hero__copy max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Enterprise Quality Platform
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[0.96] tracking-tight md:text-6xl">
            Quality Management
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100/80 md:text-base">
            แพลตฟอร์มที่ช่วยองค์กรบริหารจัดการคุณภาพ ควบคุม และยกระดับมาตรฐานการทำงานแบบครบวงจร
            เพื่อให้ทุกกระบวนการสอดคล้องกับมาตรฐานสากล เช่น ISO และข้อกำหนดทางกฎหมายอย่างถูกต้อง
            เปลี่ยนการทำงานที่กระจัดกระจายให้เป็นระบบอัตโนมัติที่ตรวจสอบได้จริง
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className="qms-hero__tag inline-flex items-center rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Explore Benefits
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View Modules
            </a>
          </div>
        </div>

        
      </div>

      <style>{`
        @keyframes qmsHeroReveal {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .qms-hero__copy {
          animation: qmsHeroReveal 0.82s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .qms-hero__visual {
          animation: qmsHeroReveal 0.96s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
        }

        .qms-hero__tag {
          animation: qmsHeroReveal 0.72s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
}
