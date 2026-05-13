import Link from "next/link";
import Navbar from "../components/Navbar";
import SectionContactFooter from "../components/SectionContactFooter";
import { NEWS_ARTICLES } from "../content/news";

const [featuredArticle, ...otherArticles] = NEWS_ARTICLES;

const pageStats = [
  { value: "03", label: "ข่าวสารและกิจกรรมล่าสุด" },
  { value: "03", label: "หน้าแยกสำหรับแต่ละบทความ" },
  { value: "03", label: "ชุด layout สำหรับใส่รูปข่าว" },
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

function ImageSlot({ title, compact = false }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border border-dashed border-white/15 bg-white/[0.03]",
        compact ? "min-h-[180px]" : "min-h-[280px]",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
          Image Slot
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="max-w-xs text-sm leading-7 text-slate-300">
          พื้นที่สำหรับใส่รูปข่าวหรือภาพกิจกรรม
        </p>
      </div>
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
                  จาก Aileen Solutions
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                รวมข่าวสาร กิจกรรม และมุมมองจากงานสัมมนา งานแสดงเทคโนโลยี และเวทีแลกเปลี่ยนความรู้
                ที่สะท้อนแนวทางการขับเคลื่อนองค์กรด้วย Process, Automation และ AI อย่างเป็นรูปธรรม
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
            eyebrow="Featured Story"
            title="ข่าวเด่นประจำช่วงนี้"
            description="เลือกหนึ่งบทความเป็นจุดนำสายตาหลัก พร้อม card ข่าวรองที่พาไปยังหน้า detail ของแต่ละข่าวได้ทันที"
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_360px]">
            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(3,7,18,0.35)] backdrop-blur">
              <div className="relative min-h-[520px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#03111f]/50 via-[#071426]/70 to-[#03111f]/95" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.2),transparent_30%)]" />

                <div className="relative grid h-full gap-6 p-6 md:p-8 xl:grid-cols-[minmax(0,1.1fr)_320px] xl:items-end">
                  <div className="flex flex-col justify-end">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-cyan-100/85">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                        {featuredArticle.category}
                      </span>
                      <span>{featuredArticle.date}</span>
                      <span>{featuredArticle.location}</span>
                    </div>

                    <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                      {featuredArticle.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {featuredArticle.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/news/${featuredArticle.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                      >
                        อ่านข่าวฉบับเต็ม
                      </Link>
                      <Link
                        href="#all-news"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                      >
                        ดูข่าวทั้งหมด
                      </Link>
                    </div>
                  </div>

                  <ImageSlot title="พื้นที่สำหรับภาพปกข่าวเด่น" />
                </div>
              </div>
            </article>

            <aside className="space-y-4">
              {otherArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="block rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.06]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    {item.category}
                  </div>
                  <div className="mt-3 text-sm text-slate-400">{item.date}</div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                </Link>
              ))}
            </aside>
          </div>
        </section>

        <section id="all-news" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-20">
          <SectionHeading
            eyebrow="All Stories"
            title="ข่าวสารและกิจกรรมทั้งหมด"
            description="แต่ละรายการเชื่อมไปยังหน้าแยกของตนเอง พร้อมเนื้อหาฉบับเต็มและพื้นที่สำหรับใส่รูปข่าวรายบทความ"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {NEWS_ARTICLES.map((item, index) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 md:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                    {item.category}
                  </div>
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-5">
                  <ImageSlot title="พื้นที่สำหรับภาพหน้ารวม" compact />
                </div>

                <div className="mt-5 text-sm text-slate-400">{item.date}</div>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                <div className="mt-5 inline-flex text-sm font-semibold text-cyan-200">
                  อ่านต่อ →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SectionContactFooter />
    </div>
  );
}
