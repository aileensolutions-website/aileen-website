import Navbar from "@/components/Navbar";
import DsaiHeroSection from "@/components/DsaiHeroSection";
import RpaBenefitsCards from "@/components/RpaBenefitsCards";
import DsaiFeaturesAccordion from "@/components/DsaiFeaturesAccordion";
import SectionContactFooter from "@/components/SectionContactFooter";

const features = [
  {
    eyebrow: "Knowledge Assistant",
    title: "AI Knowledge Assistant เฉพาะองค์กร",
    body: "AI ที่เข้าใจธุรกิจและโครงสร้างองค์กรของคุณโดยเฉพาะ ไม่ใช่ AI สาธารณะที่ตอบได้ทุกเรื่องแต่ไม่รู้จักธุรกิจขององค์กร",
  },
  {
    eyebrow: "Document Analysis",
    title: "Intelligent Document Analysis",
    body: "วิเคราะห์และสรุปข้อมูลจากเอกสารจำนวนมากได้โดยอัตโนมัติ",
  },
  {
    eyebrow: "Knowledge Search",
    title: "Precision Knowledge Search",
    body: "ค้นหาข้อมูลจาก Knowledge Base ขององค์กรได้อย่างแม่นยำ",
  },
  {
    eyebrow: "AI Chat",
    title: "AI Chat Interface",
    body: "หน้าต่างสนทนากับ AI ที่พนักงานทุกคนใช้งานได้ง่าย",
  },
  {
    eyebrow: "Process Integration",
    title: "Document Control & Process Integration",
    body: "ทำงานร่วมกับระบบ Document Management และ Process Framework ที่มีอยู่ได้",
  },
  {
    eyebrow: "System Connectivity",
    title: "Enterprise System Connectivity",
    body: "รองรับการเชื่อมต่อกับระบบองค์กร เช่น ERP, Workflow, Database",
  },
];

const benefits = [
  {
    eyebrow: "Business Context",
    title: "AI ที่รู้จักธุรกิจของคุณ",
    body: "ไม่ต้องอธิบายบริบทซ้ำทุกครั้ง เพราะ AI เข้าใจข้อมูล กระบวนการ และโครงสร้างองค์กรของคุณ",
  },
  {
    eyebrow: "Speed & Efficiency",
    title: "ค้นหาและใช้ความรู้ได้เร็วขึ้นหลายเท่า",
    body: "แทนที่เสียเวลากับการเปิดเอกสารทีละไฟล์ พนักงานถามและได้คำตอบพร้อมที่มาได้ทันที",
  },
  {
    eyebrow: "Data Accuracy",
    title: "ตัดสินใจบนข้อมูลที่ถูกต้องและเป็นปัจจุบัน",
    body: "ลดความเสี่ยงจากการใช้ข้อมูลที่ล้าสมัยหรือผิดเวอร์ชั่น",
  },
  {
    eyebrow: "Productivity",
    title: "เพิ่มประสิทธิภาพการทำงานโดยไม่ต้องเพิ่มคน",
    body: "AI ทำหน้าที่ส่วนที่กินเวลาและสร้างมูลค่าน้อย เช่น การค้นหา การสรุป และการเปรียบเทียบข้อมูล ที่เดิมอาจจะใช้เวลานาน",
  },
  {
    eyebrow: "Governance",
    title: "รองรับ Governance & Compliance",
    body: "ทุกการเข้าถึงข้อมูลมี Log และควบคุมสิทธิ์ได้ ตอบโจทย์ทั้ง PDPA และมาตรฐานสากล",
  },
];

export const metadata = {
  title: "Domain-Specific Generative AI | Aileen Solutions",
  description:
    "Domain-Specific Generative AI by Aileen Solutions — AI built on your organization's knowledge base to analyze, summarize, and support decision-making.",
};

export default function DomainSpecificGenerativeAIPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <DsaiHeroSection />

        <DsaiFeaturesAccordion features={features} />

        <RpaBenefitsCards
          benefits={benefits}
          eyebrow="Key Benefits"
          title="ประโยชน์หลักของการใช้"
          subtitle="Domain-Specific AI"
          description="AI ที่ถูกออกแบบมาเพื่อองค์กรของคุณโดยเฉพาะ ช่วยให้ทีมทำงานได้เร็วขึ้น ตัดสินใจได้แม่นยำขึ้น และใช้ความรู้ขององค์กรได้อย่างเต็มประสิทธิภาพ"
        />
      </main>

      <SectionContactFooter />
    </div>
  );
}
