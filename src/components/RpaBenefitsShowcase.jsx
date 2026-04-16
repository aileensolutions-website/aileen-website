"use client";

import { useEffect, useRef, useState } from "react";

export default function RpaBenefitsShowcase({ benefits }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="bg-slate-50 px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_22%),linear-gradient(180deg,#fbfeff_0%,#ffffff_54%,#f5fbff_100%)] px-6 py-16 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:px-10 md:py-20">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b639b,#62e5da)] opacity-90" />
          <div className="absolute -left-16 top-0 h-36 w-36 rounded-full bg-cyan-100/70 blur-3xl" />
          <div className="absolute -right-16 top-6 h-36 w-36 rounded-full bg-emerald-100/70 blur-3xl" />

          <div
            className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-[0_10px_24px_rgba(14,165,233,0.08)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Key Benefits
            </span>
            <h2 className="mt-6 bg-[linear-gradient(180deg,#1db2ae_0%,#0f2b4d_92%)] bg-clip-text text-3xl font-extrabold leading-[1.05] tracking-tight text-transparent md:text-5xl">
              ประโยชน์หลักของการใช้ RPA
              <span className="block">ในองค์กร</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              ออกแบบให้เห็นผลทั้งเรื่องความเร็ว ความแม่นยำ และการลดภาระงาน manual
              เพื่อให้ทีมมีเวลาไปโฟกัสกับงานที่สร้างคุณค่าให้ธุรกิจมากขึ้น
            </p>
          </div>

          <div className="relative mx-auto mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-[0.98] opacity-0"
                }`}
                style={{ transitionDelay: `${120 + index * 90}ms` }}
              >
                <div className="rpa-benefit-pill group relative h-full overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(180deg,#fbfeff_0%,#ffffff_52%,#f6fbff_100%)] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b639b,#62e5da)] opacity-80" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b639b,#62e5da)] text-sm font-bold text-white shadow-[0_12px_26px_rgba(14,165,233,0.24)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-200/80 to-transparent" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/80">
                    {benefit.eyebrow}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-7 tracking-tight text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[15px]">
                    {benefit.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rpa-benefit-pill {
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 240ms ease,
            filter 240ms ease;
          will-change: transform, opacity;
        }

        .rpa-benefit-pill:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 52px rgba(15, 23, 42, 0.1);
          filter: saturate(1.04);
        }
      `}</style>
    </section>
  );
}
