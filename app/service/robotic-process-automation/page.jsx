import Navbar from "@/components/Navbar";
import RpaHeroSection from "@/components/RpaHeroSection";
import SectionContactFooter from "@/components/SectionContactFooter";

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
    title: "User Friendly",
    body: "ผู้ใช้งานสามารถสร้างและปรับ Bot ได้เอง โดยไม่ต้องเขียนโค้ด",
  },
  {
    title: "Faster Operations",
    body: "ลดระยะเวลาในการดำเนินการของเจ้าหน้าที่ และช่วยให้งานเสร็จได้เร็วขึ้น",
  },
  {
    title: "Reduce Repetitive Work",
    body: "ลดภาระงานซ้ำ ๆ ของเจ้าหน้าที่ เพื่อให้ทีมโฟกัสงานที่สำคัญกว่าเดิม",
  },
  {
    title: "Lower Human Error",
    body: "ลดความผิดพลาดในการดำเนินการที่เกิดจากการทำงานแบบ manual",
  },
  {
    title: "Less Risk, More Efficiency",
    body: "ลดความเสี่ยงและเพิ่มประสิทธิภาพในการทำงานให้กับกระบวนการที่มีขั้นตอนชัดเจน",
  },
  {
    title: "More Strategic Time",
    body: "เพิ่มเวลาให้ทีมสามารถมุ่งเน้นงานเชิงกลยุทธ์และงานที่สร้างมูลค่าได้มากขึ้น",
  },
  {
    title: "DIY Control Center",
    body: "มีเครื่องมือสำหรับสร้าง สั่งงาน และติดตาม Robot ที่ใช้งานได้ง่าย",
  },
  {
    title: "Investment Worthwhile",
    body: "คุ้มค่าการลงทุน และสามารถใช้งานได้อย่างยืดหยุ่นในระดับองค์กร",
  },
];

const features = [
  "ดำเนินการขั้นตอนตามเงื่อนไขเวลา และเหตุการณ์ที่กำหนดไว้",
  "ทำงานซ้ำ ๆ ที่ใช้เวลานานให้เสร็จได้รวดเร็วขึ้น",
  "อ่านข้อมูลจากระบบต้นทาง และบันทึกข้อมูลเข้าสู่ระบบอื่น ๆ ได้",
  "เชื่อมโยงและแลกเปลี่ยนฟิลด์ข้อมูลระหว่างหลายระบบได้",
  "ช่วยแนะนำขั้นตอนการใช้งาน Application ที่ถูกต้องผ่าน Guide Me Mode",
];

const chooseGuides = [
  {
    title: "HIGHLY MANUAL AND REPETITIVE PROCESSES",
    body: "เหมาะกับกระบวนการที่มีปริมาณงานมากและเกิดซ้ำบ่อย เช่น งานประจำวัน รายสัปดาห์ หรือรายเดือน โดยเฉพาะงานที่ต้องใช้คนจำนวนมากและมีแนวโน้มเกิดข้อผิดพลาดจากมนุษย์",
  },
  {
    title: "RULE BASED PROCESSES",
    body: "เหมาะกับงานที่มีขั้นตอนหรือเทมเพลตชัดเจน การตัดสินใจมีคำตอบแน่นอน และไม่ต้องอาศัยการวิเคราะห์เชิงซับซ้อน",
  },
  {
    title: "LOW EXCEPTION RATE",
    body: "เหมาะกับกระบวนการที่มีความผันแปรต่ำ มีข้อยกเว้นน้อย และไม่ได้ขึ้นอยู่กับการตีความทางธุรกิจในแต่ละเคส",
  },
  {
    title: "PROCESSES WITH STANDARD READABLE ELECTRONIC INPUT TYPE",
    body: "เหมาะกับข้อมูลที่อยู่ในรูปแบบมาตรฐาน อ่านง่าย และสามารถจัดการให้เสร็จได้บนหน้าจอคอมพิวเตอร์",
  },
  {
    title: "HIGH VOLUMES",
    body: "เหมาะกับกระบวนการที่มีจำนวนงานเยอะ หรือมีความถี่ในการใช้งานสูงอย่างต่อเนื่อง",
  },
  {
    title: "CHANGEABLE PROCESSING METHOD OR SYSTEM CHANGE",
    body: "เหมาะกับกระบวนการที่มีมาตรฐานการทำงานคงที่ ไม่เปลี่ยนขั้นตอนหรือเทมเพลตบ่อย และมักใช้งานในรูปแบบเดิมมาแล้วอย่างน้อย 6 เดือน",
  },
  {
    title: "AUTOMATION SAVINGS - IN FTES",
    body: "เหมาะกับงานที่เมื่อทำอัตโนมัติแล้วสามารถลดภาระงานของบุคลากรในองค์กร หรือทีมที่เกี่ยวข้องได้อย่างชัดเจน",
  },
  {
    title: "MATURE AND STABLE PROCESSES",
    body: "เหมาะกับกระบวนการที่มีความเสถียร เห็นผลลัพธ์ด้าน ROI ได้ชัด และไม่ต้องแก้ไขขั้นตอนอยู่ตลอดเวลา",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl pt-5">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

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
          <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
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

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {valuePillars.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[28px] border border-cyan-100/80 bg-[linear-gradient(180deg,#fbfeff_0%,#ffffff_52%,#f6fbff_100%)] p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-[0_24px_54px_rgba(14,165,233,0.14)]"
                  >
                    
                    

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-800">
                        <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#0b639b,#62e5da)]" />
                        {item.value}
                      </div>
                      
                    </div>

                    <div className="relative mt-6 h-px w-full bg-gradient-to-r from-cyan-200 via-slate-200 to-transparent" />

                    <h3 className="relative mt-5 text-xl font-extrabold leading-8 tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-slate-600">{item.body}</p>

                   <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b639b,#62e5da)] opacity-90" />
                  </div>
                ))}
              </div>
          </div>
        </section>

        <section id="benefits" className="px-6 pb-20 pt-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Key Benefits"
              title="ประโยชน์หลักของการใช้ RPA ในองค์กร"
              description="ออกแบบมาเพื่อลดงานซ้ำ เพิ่มความเร็ว ลดความผิดพลาด และช่วยให้ทีมใช้เวลากับงานที่สร้างมูลค่ามากกว่าเดิม"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.92fr_1.08fr]">
            <SectionHeader
              eyebrow="Key Features"
              title="ความสามารถสำคัญของระบบ RPA"
              description="ครอบคลุมตั้งแต่การตั้งเวลาทำงาน การทำขั้นตอนซ้ำ การอ่านและย้ายข้อมูล ไปจนถึงการแนะนำการใช้งานที่ถูกต้อง"
            />

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-4 rounded-[24px] border border-white bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Guide to Choose"
              title="RPA เหมาะกับกระบวนการแบบไหน"
              description="ใช้ checklist นี้ช่วยประเมินเบื้องต้นว่ากระบวนการใดในองค์กรพร้อมสำหรับการนำ RPA ไปใช้งาน"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {chooseGuides.map((guide, index) => (
                <div
                  key={guide.title}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold leading-6 text-slate-900">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{guide.body}</p>
                    </div>
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
