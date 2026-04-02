import Navbar from "@/components/Navbar";
import QmsHeroSection from "@/components/QmsHeroSection";
import SectionContactFooter from "@/components/SectionContactFooter";

const benefits = [
  "ลดความผิดพลาดจากการทำงานที่ไม่เป็นมาตรฐาน",
  "รองรับ Audit and Compliance ได้ง่ายขึ้นและมีความโปร่งใสอย่างแท้จริง",
  "ลดเวลาการเตรียมเอกสารสำหรับการ Audit ในแต่ละรอบ",
  "ควบคุมเอกสารและขั้นตอนคุณภาพจากแพลตฟอร์มเดียว",
  "เพิ่มความโปร่งใสในการทำงานทั้งองค์กร",
  "ลดความเสี่ยงของการละเมิดกฎหมายโดยมิทราบ",
];

const features = [
  {
    title: "Version Control & History Tracking",
    body: "ระบบจัดการเวอร์ชันเอกสารให้อัตโนมัติ และเก็บประวัติว่าใครแก้ไข แก้เมื่อไร เพื่อลดความสับสนจากการใช้เอกสารผิดเวอร์ชัน",
  },
  {
    title: "Audit Trail Visibility",
    body: "ตรวจสอบได้ว่าเอกสารหรือข้อมูลต่าง ๆ ใครเป็นผู้แก้ไข และแก้ไขเมื่อใด ทำให้สามารถติดตามความถูกต้องของข้อมูลได้ตลอดเวลา",
  },
  {
    title: "Executive Dashboard & Analytics",
    body: "หน้าจอสรุปผลแบบกราฟิกเรียลไทม์ เพื่อให้ผู้บริหารเห็นภาพรวมของการดำเนินงานได้ทันที โดยไม่ต้องรอรายงานสรุปแบบเดิม",
  },
  {
    title: "Email & In-App Notifications",
    body: "ระบบแจ้งเตือนที่รวดเร็ว ช่วยลดปัญหาคอขวดในการรออนุมัติหรือดำเนินงาน ทำให้กระบวนการไม่สะดุด",
  },
  {
    title: "Enterprise Security & SSO",
    body: "รองรับการล็อกอินด้วยบัญชีเดิมของบริษัท เช่น Microsoft 365 หรือ Active Directory พร้อมการกำหนดสิทธิ์แบบ Role-Based Access Control",
  },
];

const modules = [
  "Document Management System",
  "Audit Management System",
  "Incident Investigation Management System",
  "Permit & Contract Management System",
  "Legal & Compliance Management System",
  "Non-Conformance Report Management System",
  "Collective Action against Corruption Management System",
  "Environmental and Health Impact Assessment Management System",
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
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
  title: "Quality Management Platform | Aileen Solutions",
  description:
    "Quality Management Platform by Aileen Solutions for compliance, document control, and quality operations.",
};

export default function QualityManagementPlatformPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <QmsHeroSection />

        <section id="modules" className="relative z-10 -mt-12 px-6 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                  Platform Modules
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  ครบทุกโมดูลสำหรับการบริหารคุณภาพ
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  ยก Platform Modules ขึ้นมาไว้ต่อจาก hero เพื่อให้เห็นภาพแพลตฟอร์มได้ทันที
                  ว่ารองรับทั้งเอกสาร Audit Compliance เหตุการณ์ และ workflow สำคัญขององค์กร
                </p>
              </div>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-800 transition hover:-translate-y-0.5"
              >
                View Features
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {modules.map((module, index) => (
                <div
                  key={module}
                  className="rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#f8fcff_0%,#ffffff_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                    Module {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">{module}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="px-6 pb-20 pt-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Key Benefits"
              title="ยกระดับคุณภาพและความพร้อมด้าน Audit ในแพลตฟอร์มเดียว"
              description="ออกแบบเพื่อให้ทีมทำงานบนมาตรฐานเดียวกัน ลดความเสี่ยงด้านเอกสาร ข้อกำหนด และการกำกับดูแลทั้งองค์กร"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Key Features"
              title="ฟีเจอร์สำคัญสำหรับควบคุมคุณภาพแบบตรวจสอบได้จริง"
              description="ครอบคลุมตั้งแต่การควบคุมเวอร์ชัน การติดตามประวัติ การสรุปผลผู้บริหาร ไปจนถึงการแจ้งเตือนและความปลอดภัยระดับองค์กร"
            />

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-[24px] border border-white bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.body}</p>
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
