import Navbar from "@/components/Navbar";
import LcbpHeroSection from "@/components/LcbpHeroSection";
import RpaBenefitsCards from "@/components/RpaBenefitsCards";
import LcbpFeaturesAccordion from "@/components/LcbpFeaturesAccordion";
import SectionContactFooter from "@/components/SectionContactFooter";

const features = [
  {
    eyebrow: "Visual Designer",
    title: "Visual Workflow Designer",
    body: "ออกแบบ Workflow ได้ง่ายในรูปแบบ Drag-and-Drop",
  },
  {
    eyebrow: "Form Builder",
    title: "Low-code Form Builder",
    body: "สร้างฟอร์ม ระบบอนุมัติ และ Workflow Automation ได้อย่างรวดเร็ว",
  },
  {
    eyebrow: "Enterprise Integration",
    title: "Enterprise Integration",
    body: "เชื่อมต่อกับระบบองค์กรได้ครอบคลุม เช่น Legacy System, ERP, Database และ API ต่างๆ",
  },
  {
    eyebrow: "AI Automation",
    title: "AI-powered Automation",
    body: "ใช้ AI ช่วยสร้าง Workflow และ Form ได้อัตโนมัติ ช่วยลดเวลาการพัฒนาได้",
  },
  {
    eyebrow: "SmartObject",
    title: "SmartObject Technology",
    body: "รวบรวมและจัดการข้อมูลจากหลายระบบไว้ในที่เดียว",
  },
  {
    eyebrow: "Task Management",
    title: "Task Management",
    body: "ติดตามสถานะงานและวิเคราะห์ข้อมูลได้ผ่าน Dashboard",
  },
  {
    eyebrow: "Specialized Apps",
    title: "Specialized Application Development",
    body: "รองรับการพัฒนา Application สำหรับหน่วยงานเฉพาะทาง เช่น Quality, Safety, Risk, Audit, Maintenance",
  },
];

const benefits = [
  {
    eyebrow: "Development Speed",
    title: "ลดระยะเวลาในการพัฒนาระบบ",
    body: "สามารถพัฒนา Application และ Workflow ได้รวดเร็วกว่าการพัฒนาแบบดั้งเดิมอย่างมีนัยสำคัญ",
  },
  {
    eyebrow: "IT Simplicity",
    title: "ลดความซับซ้อนของงาน IT",
    body: "จากเดิมที่ต้องเขียนโค้ดจำนวนมาก เปลี่ยนเป็น Visual Model ที่เข้าใจได้ง่ายกว่า",
  },
  {
    eyebrow: "Legacy Ready",
    title: "เชื่อมระบบเดิมที่มีอยู่ได้ทันที",
    body: "ไม่ต้องเปลี่ยน ERP หรือระบบ Legacy ที่ลงทุนไปแล้ว เชื่อมต่อและใช้ร่วมกันได้ทันที",
  },
  {
    eyebrow: "Scalability",
    title: "รองรับการเติบโตขององค์กรในระยะยาว",
    body: "Scale ได้ทั้งจำนวน User, Process และ Integration โดยไม่ต้องเริ่มสร้างระบบใหม่",
  },
  {
    eyebrow: "Cost Saving",
    title: "ประหยัดต้นทุน IT ในระยะยาว",
    body: "ลดการพัฒนา Custom Software และค่า Maintenance ที่เคยเป็นภาระหลักของฝ่าย IT",
  },
  {
    eyebrow: "Citizen Developer",
    title: "Citizen Developer เริ่มใช้งานได้ง่าย",
    body: "ผู้ใช้ฝั่ง Business สามารถมีส่วนร่วมออกแบบและปรับแก้ Workflow ได้จริง",
  },
  {
    eyebrow: "Error Reduction",
    title: "ลด Human Error ในกระบวนการสำคัญ",
    body: "แทนที่การทำงานผ่าน Email และ Excel ด้วย Workflow อัตโนมัติที่สามารถตรวจสอบได้ทุกขั้นตอน",
  },
  {
    eyebrow: "Real-time Visibility",
    title: "ผู้บริหารเห็นสถานะ Process แบบ Real-time",
    body: "มี Dashboard รวมสถานะ Workflow ทั้งองค์กร ช่วยให้ตัดสินใจได้รวดเร็วและแม่นยำ",
  },
  {
    eyebrow: "Tailored Solutions",
    title: "Tailored Solutions",
    body: "สามารถสร้างระบบเฉพาะองค์กรได้อย่างรวดเร็วโดยไม่ต้องรอ Vendor",
  },
  {
    eyebrow: "Agility",
    title: "Organizational Agility",
    body: "เพิ่มความคล่องตัวในการปรับปรุงกระบวนการทำงานให้ทันกับการเปลี่ยนแปลงของธุรกิจ",
  },
];

export const metadata = {
  title: "Low-Code Business Platform | Aileen Solutions",
  description:
    "Low-Code Business Platform by Aileen Solutions for rapid application and workflow development with visual tools and enterprise integration.",
};

export default function LowCodeBusinessOrchestratorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <LcbpHeroSection />

        <LcbpFeaturesAccordion features={features} />

        <RpaBenefitsCards
          benefits={benefits}
          eyebrow="Key Benefits"
          title="ประโยชน์หลักของการใช้"
          subtitle="Low-Code Platform"
          description="ลดเวลาและต้นทุนในการพัฒนาระบบ ให้ทั้ง IT และ Business ทำงานร่วมกันได้อย่างมีประสิทธิภาพ พร้อมรองรับการเติบโตขององค์กรในระยะยาว"
        />
      </main>

      <SectionContactFooter />
    </div>
  );
}
