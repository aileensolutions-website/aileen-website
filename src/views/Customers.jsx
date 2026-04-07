"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SectionContactFooter from "../components/SectionContactFooter";

const showcaseCustomers = [
  { src: "/img/home/customers/ptt.png", alt: "PTT" },
  { src: "/img/home/customers/GC.webp", alt: "GC" },
  { src: "/img/home/customers/egat.png", alt: "EGAT" },
  { src: "/img/home/customers/AGC.png", alt: "AGC" },
  { src: "/img/home/customers/bangchak.svg", alt: "Bangchak" },
  { src: "/img/home/customers/NOK.png", alt: "NOK" },
];

const allCustomers = [
  { src: "/img/home/customers/ptt.png", alt: "PTT" },
  { src: "/img/home/customers/logo_PTT_3.png", alt: "PTT Group" },
  { src: "/img/home/customers/ptt-digital.png", alt: "PTT Digital" },
  { src: "/img/home/customers/GC.webp", alt: "GC" },
  { src: "/img/home/customers/ggc.png", alt: "GGC" },
  { src: "/img/home/customers/egat.png", alt: "EGAT" },
  { src: "/img/home/customers/AGC.png", alt: "AGC" },
  { src: "/img/home/customers/bangchak.svg", alt: "Bangchak" },
  { src: "/img/home/customers/HMC.png", alt: "HMC Polymers" },
  { src: "/img/home/customers/npc.png", alt: "NPC" },
  { src: "/img/home/customers/ptt-asahi.png", alt: "PTT Asahi" },
  { src: "/img/home/customers/Tex.png", alt: "Thai Ethoxylate (TEX)" },
  { src: "/img/home/customers/NOK.png", alt: "NOK" },
];

function useInView(threshold = 0.14) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Customers() {
  const [heroRef, heroInView] = useInView(0.12);
  const [logosRef, logosInView] = useInView(0.1);

  return (
    <div className="min-h-screen bg-[#07101c] text-white">
      <Navbar />

      <main className="overflow-hidden">
        <section
          ref={heroRef}
          className="relative isolate overflow-hidden px-6 pb-24 pt-28 md:px-10 md:pb-28 md:pt-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(41,121,255,0.34),transparent_26%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_76%_74%,rgba(16,185,129,0.14),transparent_24%),linear-gradient(140deg,#07111f_0%,#0d2240_46%,#0a1525_100%)]" />
          <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full border border-white/8 bg-white/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute right-[-8%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] left-[40%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:84px_84px]" />
          <div className="pointer-events-none absolute -left-[20%] top-1/3 h-px w-[70%] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
          <div className="pointer-events-none absolute right-[-15%] top-[18%] h-px w-[52%] -rotate-[24deg] bg-gradient-to-r from-transparent via-white/28 to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_26px_90px_rgba(2,12,27,0.44)] backdrop-blur-xl md:px-8 md:py-10 lg:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_24%)]" />
              <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative z-10 max-w-2xl">
              <span
                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 transition-all duration-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Trusted Customers
              </span>

              <h1
                className={`mt-6 text-4xl font-black leading-[0.96] tracking-tight md:text-6xl transition-all duration-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "80ms" }}
              >
                Trusted by
                <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                  Leading Organizations
                </span>
              </h1>

              <p
                className={`mt-6 max-w-3xl text-base leading-8 text-slate-100/80 md:text-lg transition-all duration-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "160ms" }}
              >
                Aileen Solutions ได้รับความไว้วางใจจากองค์กรชั้นนำในการพัฒนาโซลูชันดิจิทัล
                ที่เชื่อมระบบงาน ข้อมูล และ workflow ให้ทำงานร่วมกันได้จริงในระดับองค์กร
              </p>

              <div
                className={`mt-7 flex flex-wrap gap-3 transition-all duration-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "240ms" }}
              >
                {["Digital Transformation", "Enterprise Workflow", "Operational Clarity"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`mt-9 flex flex-wrap gap-4 transition-all duration-700 ${
                  heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "320ms" }}
              >
                <a
                  href="#customer-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  View All Customers
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Contact Our Experts
                </a>
              </div>
                  <p
                    className={`mt-9 max-w-xl text-sm leading-7 text-white/62 transition-all duration-700 md:text-base ${
                      heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    เราออกแบบระบบให้ตอบโจทย์การปฏิบัติงานจริงขององค์กรขนาดใหญ่
                    โดยเฉพาะงานที่ต้องอาศัยความต่อเนื่อง ความชัดเจนของข้อมูล และการเชื่อมโยงหลายหน่วยงานเข้าหากัน
                  </p>
                </div>

                <div
                  className={`relative z-10 transition-all duration-700 ${
                    heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "220ms" }}
                >
                  <div className="rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_28px_60px_rgba(2,12,27,0.3)] md:p-5">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 md:p-5">
                      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                            Selected Customers
                          </p>
                          <h2 className="mt-1 text-lg font-bold text-white md:text-xl">
                            Trusted Across Energy & Industry
                          </h2>
                        </div>
                        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                          6 Featured
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
                      {showcaseCustomers.map((customer) => (
                        <article
                          key={customer.alt}
                          className="group relative flex min-h-[110px] items-center justify-center overflow-hidden rounded-[22px] border border-slate-200/80 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] px-5 py-4 shadow-[0_14px_28px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(37,99,235,0.22)]"
                        >
                          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-70" />
                          <img
                            src={customer.src}
                            alt={customer.alt}
                            className="relative z-10 max-h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.03] md:max-h-14"
                          />
                        </article>
                      ))}
                    </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-3">
                        {["Energy", "Petrochemical", "Manufacturing"].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-[#081526]/72 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/74"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="customer-grid"
          ref={logosRef}
          className="relative bg-[linear-gradient(180deg,#eef5fb_0%,#ffffff_40%,#f8fafc_100%)] px-6 pb-20 pt-10 md:px-10 md:pb-24"
        >
          <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                All Customers
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                ลูกค้าที่ไว้วางใจเรา
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                รวมองค์กรที่ Aileen Solutions ได้มีโอกาสร่วมพัฒนาโซลูชัน ระบบงาน
                และ digital workflow ในบริบทการทำงานจริง
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allCustomers.map((customer, index) => (
                <article
                  key={`${customer.alt}-${index}`}
                  className={`group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)] ${
                    logosInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <div className="flex h-24 items-center justify-center rounded-[20px] bg-[linear-gradient(180deg,#f8fbff_0%,#f1f7fb_100%)] px-4">
                    <img
                      src={customer.src}
                      alt={customer.alt}
                      className="max-h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 text-center text-sm font-semibold text-slate-700">
                    {customer.alt}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#eff6ff_0%,#f8fafc_52%,#ecfeff_100%)] p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <p className="max-w-3xl text-base leading-8 text-slate-600">
                  จาก energy และ petrochemical ไปจนถึง enterprise operation
                  เราออกแบบระบบที่ช่วยให้องค์กรทำงานได้ชัดขึ้น เร็วขึ้น และเชื่อมต่อกันได้ดีขึ้น
                  โดยไม่ทิ้งความยืดหยุ่นที่ธุรกิจต้องการในระยะยาว
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SectionContactFooter />
    </div>
  );
}
