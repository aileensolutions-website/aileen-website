import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import SectionContactFooter from "../components/SectionContactFooter";
import { getNewsArticle, NEWS_ARTICLES } from "../content/news";

function MediaPlaceholder({ title, ratio = "wide", className = "" }) {
  const ratioClass =
    ratio === "portrait"
      ? "min-h-[240px] md:min-h-[320px]"
      : "min-h-[260px] md:min-h-[360px]";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border border-dashed border-white/15 bg-white/[0.03]",
        ratioClass,
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
          Image Slot
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="max-w-sm text-sm leading-7 text-slate-300">
          พื้นที่สำหรับใส่รูปข่าวสารหรือกิจกรรมในภายหลัง
        </p>
      </div>
    </div>
  );
}

export default function NewsArticle({ slug }) {
  const article = getNewsArticle(slug);

  if (!article) notFound();

  const relatedArticles = NEWS_ARTICLES.filter((item) => item.slug !== article.slug);

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
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/85 transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <span>←</span>
              กลับไปหน้าข่าวสาร
            </Link>

            <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_420px] xl:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-cyan-100/85">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                  <span>{article.location}</span>
                </div>

                <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                  {article.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  {article.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs text-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Key Highlights
                </div>
                <div className="mt-5 space-y-4">
                  {article.highlights.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/8 bg-black/10 p-4"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                        Highlight {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          {article.media.heroImage ? (
            <div className="overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={article.media.heroImage}
                alt={article.media.heroAlt || article.title}
                className="h-[320px] w-full object-cover md:h-[520px]"
              />
            </div>
          ) : (
            <MediaPlaceholder title={article.media.heroAlt || article.title} className="rounded-[32px]" />
          )}
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 md:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
              {article.sections.map((section) => (
                <div key={section.heading} className="mb-10 last:mb-0">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside className="space-y-5">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Article Info
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Category</div>
                    <div className="mt-1 text-white">{article.category}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Published</div>
                    <div className="mt-1 text-white">{article.date}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</div>
                    <div className="mt-1 text-white">{article.location}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-cyan-300/12 bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-transparent p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  Need More Detail?
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  หากต้องการสอบถามรายละเอียดเพิ่มเติมเกี่ยวกับงาน แนวคิด หรือโซลูชั่นที่เกี่ยวข้อง สามารถติดต่อทีมงานของ Aileen Solutions ได้โดยตรง
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  ติดต่อทีมงาน
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
                Photo Layout
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                พื้นที่สำหรับรูปข่าวสาร
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              สามารถนำภาพกิจกรรมจริงมาแทนที่ placeholder ด้านล่างได้ทันที โดยไม่ต้องปรับโครงสร้างหน้าใหม่
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {article.media.gallery.map((item) => (
              <MediaPlaceholder key={item.title} title={item.title} ratio={item.ratio} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-8 md:pb-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
                More Stories
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                ข่าวสารและกิจกรรมอื่น ๆ
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.06]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  {item.category}
                </div>
                <div className="mt-3 text-sm text-slate-400">{item.date}</div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SectionContactFooter />
    </div>
  );
}
