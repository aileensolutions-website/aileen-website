import Navbar from "@/components/Navbar";
import RpaHeroSection from "@/components/RpaHeroSection";
import RpaBenefitsCards from "@/components/RpaBenefitsCards";
import RpaFeaturesAccordion from "@/components/RpaFeaturesAccordion";
import SectionContactFooter from "@/components/SectionContactFooter";
import Image from "next/image";
import rpaSceneImage from "@/assets/img/RPA/rpa.png";

const valuePillars = [
  {
    value: "Continuous",
    title: "ทำงานได้อย่างต่อเนื่องไม่มีสะดุด",
    body: "รองรับปริมาณงานได้ตลอด ไม่ต้องรอ ไม่ต้องพัก ช่วยให้ทุกกระบวนการดำเนินไปอย่างลื่นไหล",
  },
  {
    value: "Flexible",
    title: "ออกแบบและปรับ Bot ได้ตามต้องการ",
    body: "สร้าง แก้ไข และพัฒนา Workflow ได้ง่าย รองรับการเปลี่ยนแปลงของธุรกิจโดยไม่ต้องเริ่มใหม่",
  },
  {
    value: "Efficient",
    title: "ลดขั้นตอน เพิ่มความเร็วในการทำงาน",
    body: "ลดเวลาจากงานที่เคยใช้หลายขั้นตอน ให้เสร็จได้อย่างรวดเร็วและเป็นระบบมากขึ้น",
  },
  {
    value: "Reliable",
    title: "แม่นยำ สม่ำเสมอ ตรวจสอบได้",
    body: "ลดข้อผิดพลาดจากงาน Manual พร้อมทำงานตามเงื่อนไขที่กำหนดอย่างมีมาตรฐาน",
  },
];

const benefits = [
  {
    eyebrow: "No-Code Control",
    title: "ให้ทีมงานสร้างและปรับ Bot ได้เอง",
    body: "ลดการพึ่งพาการพัฒนาแบบเต็มรูปแบบ และเริ่มต้นงานอัตโนมัติได้เร็วขึ้นโดยไม่ต้องเขียนโค้ดมาก",
  },
  {
    eyebrow: "Faster Operations",
    title: "ลดเวลาในงานประจำที่กินทรัพยากร",
    body: "Bot เข้ามารับช่วงขั้นตอนซ้ำ ๆ ช่วยให้การทำงานของเจ้าหน้าที่รวดเร็วขึ้นและส่งต่องานได้ทันเวลา",
  },
  {
    eyebrow: "Less Manual Work",
    title: "ลดภาระงานซ้ำ เพิ่มเวลาสำหรับงานสำคัญ",
    body: "ทีมสามารถย้ายเวลาไปโฟกัสงานวิเคราะห์ งานบริการ และงานเชิงกลยุทธ์ที่สร้างมูลค่ามากกว่า",
  },
  {
    eyebrow: "Accuracy",
    title: "ลดความผิดพลาดจาก Human Error",
    body: "ดำเนินงานตามกฎและลำดับขั้นตอนเดิมอย่างสม่ำเสมอ ช่วยให้ข้อมูลและผลลัพธ์มีมาตรฐานมากขึ้น",
  },
  {
    eyebrow: "Risk & Compliance",
    title: "ลดความเสี่ยง พร้อมตรวจสอบย้อนหลังได้ง่าย",
    body: "ทุกขั้นตอนสามารถกำหนดเงื่อนไข ติดตามสถานะ และสร้างร่องรอยการทำงานเพื่อรองรับการตรวจสอบได้",
  },
  {
    eyebrow: "ROI Ready",
    title: "คุ้มค่าการลงทุนและขยายผลได้ต่อเนื่อง",
    body: "เริ่มจากกระบวนการที่เห็นผลเร็ว แล้วต่อยอดไปยังหลายทีม หลายระบบ และหลาย use case ได้อย่างเป็นขั้นตอน",
  },
];

const features = [
  {
    eyebrow: "Trigger & Schedule",
    title: "สั่งงาน Bot ตามเวลาและเงื่อนไขที่กำหนด",
    body: "รองรับการทำงานอัตโนมัติทั้งแบบตั้งเวลา รายวัน รายสัปดาห์ หรือเริ่มทำงานจาก event สำคัญในระบบ",
  },
  {
    eyebrow: "Task Automation",
    title: "จัดการงานซ้ำ ๆ ให้เสร็จอย่างรวดเร็วและสม่ำเสมอ",
    body: "ช่วยลดเวลาจากขั้นตอน manual ที่ต้องคลิก คัดลอก ตรวจสอบ และบันทึกข้อมูลซ้ำเดิมทุกวัน",
  },
  {
    eyebrow: "Cross-System Data",
    title: "อ่านและบันทึกข้อมูลข้ามหลายระบบได้",
    body: "ดึงข้อมูลจากระบบต้นทาง ประมวลผล แล้วส่งต่อไปยังอีกระบบหนึ่งโดยไม่ต้องคีย์ข้อมูลซ้ำ",
  },
  {
    eyebrow: "Workflow Mapping",
    title: "เชื่อมโยงข้อมูลและลำดับงานระหว่างระบบ",
    body: "รองรับการเคลื่อนย้ายฟิลด์ข้อมูล การจับคู่ข้อมูล และการทำงานต่อเนื่องในหลาย application",
  },
  {
    eyebrow: "Guide Me Mode",
    title: "แนะนำขั้นตอนการใช้งานที่ถูกต้องให้ผู้ปฏิบัติงาน",
    body: "ช่วยลดความสับสนในการทำงานบน application และทำให้ทุกคนทำตามขั้นตอนมาตรฐานเดียวกันได้ง่ายขึ้น",
  },
];

const chooseGuides = [
  {
    eyebrow: "High Volume",
    title: "งานปริมาณมากและเกิดซ้ำสม่ำเสมอ",
    body: "เหมาะกับกระบวนการประจำวัน รายสัปดาห์ หรือรายเดือนที่มีจำนวนรายการเยอะและใช้เวลาของทีมจำนวนมาก",
  },
  {
    eyebrow: "Rule Based",
    title: "งานที่มีกฎเกณฑ์และขั้นตอนชัดเจน",
    body: "หากการตัดสินใจอิงตามเงื่อนไขเดิม เทมเพลตเดิม หรือคำตอบที่แน่นอน RPA จะเข้ามาช่วยได้อย่างมีประสิทธิภาพ",
  },
  {
    eyebrow: "Low Exception",
    title: "งานที่มีข้อยกเว้นไม่มาก",
    body: "กระบวนการที่รูปแบบการทำงานค่อนข้างนิ่ง ไม่ต้องใช้การตีความแตกต่างกันในแต่ละเคส จะเหมาะกับการทำอัตโนมัติมากกว่า",
  },
  {
    eyebrow: "Readable Input",
    title: "ข้อมูลต้นทางอยู่ในรูปแบบมาตรฐานและอ่านได้",
    body: "เช่น ข้อมูลในหน้าจอ ระบบภายใน ฟอร์ม หรือไฟล์ที่มีโครงสร้างชัดเจน ซึ่ง Bot สามารถหยิบไปทำงานต่อได้ง่าย",
  },
  {
    eyebrow: "Stable Process",
    title: "กระบวนการมีความเสถียรและไม่เปลี่ยนบ่อย",
    body: "หากขั้นตอนการทำงานคงที่มาระยะหนึ่ง RPA จะช่วยให้การลงทุนคุ้มค่าและลดภาระการปรับ bot บ่อยครั้ง",
  },
  {
    eyebrow: "Clear Savings",
    title: "มีผลลัพธ์ด้านเวลาและกำลังคนที่วัดได้ชัด",
    body: "ยิ่งกระบวนการลด effort ของทีมได้ชัดเจนเท่าไร ก็ยิ่งเห็น ROI และผลลัพธ์เชิงธุรกิจจากการใช้ RPA ได้เร็วขึ้น",
  },
];

export const metadata = {
  title: "Robotic Process Automation | Aileen Solutions",
  description:
    "Robotic Process Automation by Aileen Solutions helps automate repetitive business tasks with software bots that work accurately around the clock.",
};

export default function RoboticProcessAutomationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <RpaHeroSection />

        <section id="always-on" className="relative z-10 -mt-12 px-6 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[32px]  border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl py-8 px-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                  Always-On Digital Worker
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  <span className="block">RPA Bot Assistant</span>
                  <span className="mt-1 block bg-[linear-gradient(90deg,#0b639b,#62e5da)] bg-clip-text text-transparent">
                    ยกระดับงานอัตโนมัติให้ธุรกิจคุณ
                  </span>
                </h2>
              </div>
             
            </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 pb-10">
                {valuePillars.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(180deg,#fbfeff_0%,#ffffff_52%,#f6fbff_100%)] p-6 shadow-[0_4px_12px_rgba(15,23,42,0.02)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(15,23,42,0.035)]"
                  >
                    
                    

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-cyan-50/85 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-800">
                        <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#0b639b,#62e5da)]" />
                        {item.value}
                      </div>
                      
                    </div>

                    <div className="relative mt-6 h-px w-full bg-gradient-to-r from-cyan-200 via-slate-200 to-transparent" />

                    <h3 className="relative mt-5 text-xl font-semibold leading-8 tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-slate-600">{item.body}</p>

                   <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b639b,#62e5da)] opacity-90" />
                  </div>
                ))}
              </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="py-6 md:py-10">
              <div className="relative mx-auto w-full max-w-[940px]">
                <Image
                  src={rpaSceneImage}
                  alt="RPA working across connected systems"
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              
            </div>
          </div>
        </section>

        <RpaBenefitsCards
          benefits={benefits}
          eyebrow="Key Benefits"
          title="ประโยชน์หลักของการใช้ RPA"
          subtitle="ในองค์กร"
          description="ออกแบบให้เห็นผลทั้งเรื่องความเร็ว ความแม่นยำ และการลดภาระงาน manual เพื่อให้ทีมมีเวลาไปโฟกัสกับงานที่สร้างคุณค่าให้ธุรกิจมากขึ้น"
        />

        <RpaFeaturesAccordion features={features} />

        <section className="bg-[#f4f8fc] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">

            {/* Centered header */}
            <div className="mx-auto mb-4 max-w-2xl text-center">
              <span className="lv8-pill">
                <span className="lv8-hdot" />
                Guide to Choose
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
                RPA เหมาะกับ
                <span className="mt-1 block bg-[linear-gradient(90deg,#0b639b,#62e5da)] bg-clip-text text-transparent">
                  กระบวนการแบบไหน
                </span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-500">
                ถ้างานของคุณมีลักษณะตามรายการเหล่านี้หลายข้อพร้อมกัน
                โอกาสที่จะนำ RPA ไปใช้แล้วเห็นผลเร็วจะสูงขึ้น
              </p>
            </div>

            {/* Criteria grid */}
            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {chooseGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="group flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_4px_12px_rgba(15,23,42,0.02)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(15,23,42,0.035)]"
                >
                  <div className="mt-0.5 shrink-0">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0b639b,#62e5da)]">
                      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M4.5 10.5L7.8 13.8L15.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                      {guide.eyebrow}
                    </p>
                    <h3 className="mt-1.5 text-sm font-bold leading-6 text-slate-900">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{guide.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <SectionContactFooter />
    </div>
  );
}
