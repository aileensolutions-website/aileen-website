import Navbar from "../components/Navbar";
import SectionContactFooter from "../components/SectionContactFooter";

const featuredNews = {
  category: "Featured News",
  date: "03 เมษายน 2026",
  title: "Aileen Solutions เปิดแนวทาง Digital Process & AI สำหรับองค์กรยุคใหม่",
  summary:
    "อัปเดตวิสัยทัศน์และทิศทางการพัฒนาโซลูชันที่เชื่อมโยงกระบวนการทำงาน ข้อมูล และ AI เพื่อช่วยให้องค์กรวางระบบที่ยืดหยุ่น ตรวจสอบได้ และขยายผลได้จริงในระดับปฏิบัติการและระดับบริหาร",
  image: "/img/about/aileen-about.jpg",
  highlights: ["Process-First Design", "AI-Integrated Workflow", "Enterprise Readiness"],
};

const spotlightNews = [
  {
    category: "News Update",
    date: "28 มีนาคม 2026",
    title: "ยกระดับคุณภาพงานด้วย Quality Management Platform",
    summary:
      "แนวทางการจัดการเอกสาร มาตรฐาน และการติดตามคุณภาพให้เป็นระบบเดียวที่ทำงานร่วมกันได้ทั้งองค์กร",
  },
  {
    category: "Insight",
    date: "20 มีนาคม 2026",
    title: "Process Automation ที่ดี ต้องออกแบบจากงานจริง",
    summary:
      "มุมมองจากทีมที่ปรึกษา Aileen ถึงการเริ่มต้น Automation อย่างถูกจุด เพื่อให้เห็นผลลัพธ์ได้เร็วและต่อยอดได้ระยะยาว",
  },
];

const latestNews = [
  {
    category: "Case Study",
    date: "15 มีนาคม 2026",
    title: "ออกแบบ Workflow กลางเพื่อลดขั้นตอนงานซ้ำซ้อน",
    summary:
      "ตัวอย่างการจัดโครงสร้างการทำงานใหม่ให้ทีมงานมองเห็นสถานะงานเดียวกันแบบ end-to-end",
  },
  {
    category: "Technology",
    date: "11 มีนาคม 2026",
    title: "เชื่อมข้อมูลจากหลายระบบสู่แพลตฟอร์มเดียว",
    summary:
      "สรุปแนวคิดสำคัญของการรวมข้อมูลจากหลายแหล่ง เพื่อสร้างการตัดสินใจที่เร็วขึ้นและแม่นยำขึ้น",
  },
  {
    category: "Company News",
    date: "06 มีนาคม 2026",
    title: "Aileen Solutions ขยายบริการด้าน AI และ Process Consulting",
    summary:
      "ต่อยอดบริการที่ช่วยให้องค์กรเริ่มต้นจากกลยุทธ์ ไปสู่การใช้งานระบบจริงได้อย่างต่อเนื่อง",
  },
];

const upcomingEvents = [
  {
    month: "APR",
    day: "18",
    title: "สัมมนา News & Events Showcase",
    detail: "อัปเดตโซลูชันล่าสุดและแนวทางนำ AI ไปใช้ร่วมกับกระบวนการทำงานจริง",
  },
  {
    month: "MAY",
    day: "07",
    title: "Workshop: Process Automation for Operations",
    detail: "เวิร์กช็อปสำหรับทีมปฏิบัติการที่ต้องการลดงานซ้ำและเพิ่มความเร็วในการอนุมัติ",
  },
  {
    month: "MAY",
    day: "22",
    title: "Executive Roundtable",
    detail: "แลกเปลี่ยนแนวคิดการออกแบบแพลตฟอร์มองค์กรที่พร้อมต่อยอดด้วย AI",
  },
];

const pageStats = [
  { value: "01", label: "ข่าวเด่นประจำหน้า" },
  { value: "03", label: "ข่าวสารล่าสุด" },
  { value: "03", label: "กิจกรรมที่กำลังจะมาถึง" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
          {title}
        </h2>
      </div>

      {description ? <p className="max-w-xl text-sm leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function News() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06101d] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[49] h-24 bg-gradient-to-b from-[#06101d] via-[#06101d]/80 to-transparent" />
      <Navbar />

      <main className="relative">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8%] top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-[-10%] top-10 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                News & Events
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                ข่าวสารและกิจกรรม
                <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  ที่อยากให้คุณเห็นก่อน
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                หน้านี้ออกแบบให้มีข่าวเด่นที่สุดหนึ่งชิ้นเป็นจุดนำสายตาหลัก พร้อมข่าวสารล่าสุดและกิจกรรมที่กำลังจะเกิดขึ้น
                เพื่อให้ผู้ชมรับสารสำคัญได้ทันทีตั้งแต่เปิดหน้า
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pageStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur"
                >
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-news" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Top Story"
            title="ข่าวสารสำคัญที่สุด"
            description="วาง layout ให้ข่าวหลักมีน้ำหนักมากที่สุดด้วยพื้นที่ขนาดใหญ่ ภาพประกอบ และข้อมูลสรุปที่อ่านจบได้ในไม่กี่วินาที"
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_360px]">
            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(3,7,18,0.35)] backdrop-blur">
              <div className="relative min-h-[520px] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#03111f]/40 via-[#071426]/58 to-[#03111f]/94" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.2),transparent_30%)]" />

                <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-cyan-100/85">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                      {featuredNews.category}
                    </span>
                    <span>{featuredNews.date}</span>
                  </div>

                  <h3 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                    {featuredNews.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                    {featuredNews.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {featuredNews.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    >
                      ติดต่อเพื่อขอรายละเอียด
                    </a>
                    <a
                      href="#all-news"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                    >
                      ดูข่าวสารทั้งหมด
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-4">
              {spotlightNews.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.06]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    {item.category}
                  </div>
                  <div className="mt-3 text-sm text-slate-400">{item.date}</div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                </article>
              ))}

              <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-transparent p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                  Content Direction
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  โครงสร้างนี้ช่วยให้ข่าวเด่นหนึ่งชิ้นถูกมองเห็นก่อนทันที ขณะที่ข่าวรองยังคงอ่านต่อได้ลื่นในคอลัมน์ด้านข้าง
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="all-news" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <SectionHeading
                eyebrow="Latest Update"
                title="ข่าวสารล่าสุด"
                description="การ์ดข่าวรองออกแบบให้สแกนหัวข้อ วันที่ และใจความสำคัญได้เร็ว เหมาะกับการเพิ่มรายการข่าวได้ต่อเนื่อง"
              />

              <div className="grid gap-4">
                {latestNews.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 md:grid-cols-[88px_minmax(0,1fr)] md:p-6"
                  >
                    <div className="flex h-[88px] w-[88px] items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300/20 via-teal-300/10 to-sky-300/20 text-2xl font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <span className="text-cyan-200/80">{item.category}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Upcoming Event"
                title="กิจกรรมที่กำลังจะมาถึง"
                description="เพิ่มมิติของหน้าให้มากกว่าข่าวสาร ด้วย event timeline ที่อ่านง่ายและพร้อมขยายต่อได้ภายหลัง"
              />

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-7">
                <div className="space-y-5">
                  {upcomingEvents.map((item) => (
                    <div
                      key={`${item.month}-${item.day}-${item.title}`}
                      className="grid gap-4 rounded-[24px] border border-white/8 bg-black/10 p-4 md:grid-cols-[76px_minmax(0,1fr)]"
                    >
                      <div className="rounded-[22px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/15 to-sky-400/10 px-3 py-4 text-center">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                          {item.month}
                        </div>
                        <div className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-white">
                          {item.day}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-dashed border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
                  สามารถต่อยอดส่วนนี้เป็นระบบประกาศกิจกรรมจริงได้ภายหลัง เช่น ปุ่มลงทะเบียน รายละเอียดสถานที่
                  หรือการเชื่อมกับหน้า event detail แยกแต่ละรายการ
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SectionContactFooter />
    </div>
  );
}
