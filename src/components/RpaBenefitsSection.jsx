"use client";

import { useEffect, useRef, useState } from "react";

export default function RpaBenefitsSection({ benefits }) {
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
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_26%),linear-gradient(180deg,#ffffff_0%,#fbfefd_100%)] px-6 py-16 md:px-10 md:py-24">
          <div className="absolute -left-16 top-0 h-36 w-36 rounded-full bg-cyan-100/70 blur-3xl" />
          <div className="absolute -right-16 top-6 h-36 w-36 rounded-full bg-emerald-100/70 blur-3xl" />

          <div
            className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Key Benefits
            </span>
            <h2 className="mt-6 bg-[linear-gradient(180deg,#1db2ae_0%,#0f2b4d_92%)] bg-clip-text text-3xl font-extrabold leading-[1.05] tracking-tight text-transparent md:text-5xl">
              ประโยชน์หลักของการใช้ RPA
              <span className="block">ในองค์กร</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-12 flex max-w-[620px] flex-col items-center gap-3">
            {benefits.map((benefit, index) => {
              const isBright = index % 2 === 0;
              const alignment =
                index % 2 === 0
                  ? "sm:self-start sm:-translate-x-5"
                  : "sm:self-end sm:translate-x-5";
              const widthClass =
                index % 3 === 0
                  ? "sm:w-[78%]"
                  : index % 3 === 1
                    ? "sm:w-[74%]"
                    : "sm:w-[70%]";

              return (
                <div
                  key={benefit.title}
                  className={`w-full transition-all duration-700 ease-out ${alignment} ${widthClass} ${
                    isVisible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-10 scale-[0.98] opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + index * 90}ms` }}
                >
                  <div
                    className={`rpa-benefit-pill flex items-center gap-3 rounded-full px-4 py-3 text-white shadow-[0_12px_28px_rgba(15,23,42,0.10)] sm:px-5 ${
                      isBright
                        ? "bg-[linear-gradient(90deg,#18bcb3,#33d2c5)]"
                        : "bg-[linear-gradient(90deg,#12385c,#0f2845)]"
                    }`}
                  >
                    <span className="text-base leading-none">
                      {isBright ? "●" : "◆"}
                    </span>
                    <p className="text-sm font-medium leading-6 md:text-[15px]">
                      {benefit.title}
                      {benefit.body ? ` ${benefit.body}` : ""}
                    </p>
                  </div>
                </div>
              );
            })}
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
          transform: translateY(-4px) scale(1.015);
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.14);
          filter: saturate(1.04);
        }
      `}</style>
    </section>
  );
}
