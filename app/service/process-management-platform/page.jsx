import Navbar from "@/components/Navbar";
import PmpHeroSection from "@/components/PmpHeroSection";
import RpaBenefitsCards from "@/components/RpaBenefitsCards";
import PmpFeaturesAccordion from "@/components/PmpFeaturesAccordion";
import SectionContactFooter from "@/components/SectionContactFooter";

const benefits = [
  {
    eyebrow: "Enterprise Visibility",
    title: "เห็นภาพการดำเนินงานของทั้งองค์กรในที่เดียว",
    body: "ผู้บริหารและพนักงานเข้าใจว่าแต่ละฝ่ายทำงานเชื่อมโยงกันอย่างไร",
  },
  {
    eyebrow: "Knowledge Retention",
    title: "ลดการสูญเสียความรู้เมื่อพนักงานลาออก",
    body: "Process Knowledge ถูกบันทึกเป็นระบบ ไม่ผูกติดกับตัวบุคคล",
  },
  {
    eyebrow: "Faster Onboarding",
    title: "พนักงานเรียนรู้งานได้เร็วขึ้น",
    body: "มีกระบวนการที่ชัดเจนให้ศึกษาได้ทันที ลดการพึ่งพาการสอนปากเปล่า",
  },
  {
    eyebrow: "Kaizen Culture",
    title: "รองรับการทำงานรูปแบบ Kaizen Model",
    body: "พนักงานสามารถเสนอปรับปรุงได้ผ่านระบบ สร้างวัฒนธรรม Continuous Improvement ที่เกิดขึ้นจริง",
  },
  {
    eyebrow: "Global Standardization",
    title: "ควบคุมมาตรฐานการทำงานข้ามสาขาและข้ามประเทศ",
    body: "ทุกหน่วยงานดำเนินงานภายใต้ Process Framework เดียวกัน ปรับเปลี่ยนพร้อมกันได้เมื่อมี Policy ใหม่",
  },
  {
    eyebrow: "Automation Ready",
    title: "วางฐานสำหรับ Automation และ Digital Transformation",
    body: "เห็นว่ากระบวนการไหนมี Bottleneck หรือเหมาะกับการทำ Automation ก่อนลงทุนจริง",
  },
  {
    eyebrow: "Error Reduction",
    title: "ลดข้อผิดพลาดจากความเข้าใจคลาดเคลื่อน",
    body: "ปัญหา \"คนละเวอร์ชัน\" หรือ \"คนละวิธีทำ\" ลดลงอย่างเป็นระบบ",
  },
];

const features = [
  {
    eyebrow: "Process Auto-Map",
    title: "Process Mapping ที่สร้างได้โดยไม่ต้องวาดเอง",
    body: "ระบบสร้าง Process Map ให้อัตโนมัติจากการกรอกขั้นตอนการทำงาน พนักงานทั่วไปสามารถสร้างและดูกระบวนการได้เอง",
  },
  {
    eyebrow: "Process AI",
    title: "Process AI ช่วยสร้างและปรับปรุงกระบวนการ",
    body: "ใช้ AI ช่วยร่างกระบวนการจากคำอธิบาย ลดเวลาในการเริ่มต้น",
  },
  {
    eyebrow: "Central Library",
    title: "Centralized Process Library",
    body: "รวมกระบวนการทำงานของทุกฝ่ายไว้ในที่เดียว ค้นหาและเชื่อมโยงระหว่างกระบวนการได้ ทุกคนเห็นเวอร์ชันล่าสุด",
  },
  {
    eyebrow: "Governance",
    title: "Process Governance",
    body: "มีระบบอนุมัติก่อน Publish เพื่อให้ทุก Process ผ่านการตรวจสอบอย่างถูกต้อง",
  },
  {
    eyebrow: "Continuous Improvement",
    title: "Feedback สำหรับ Continuous Improvement",
    body: "พนักงานที่ปฏิบัติงานจริงสามารถเสนอปรับปรุงกระบวนการได้ผ่านระบบ",
  },
  {
    eyebrow: "Variations",
    title: "Process Variations",
    body: "รองรับกรณีที่กระบวนการเดียวกันมีรูปแบบการดำเนินงานแตกต่างกันในแต่ละสาขา / แผนก / ประเทศ โดยยังอยู่ภายใต้ Master Process เดียวกัน พร้อมรองรับการสร้างรูปแบบกระบวนการเพื่อการปรับปรุง เช่น Version Lean, Automation Version หรือแนวทาง Improvement อื่น ๆ เพื่อนำไปเปรียบเทียบ วิเคราะห์ และพัฒนากระบวนการให้มีประสิทธิภาพมากขึ้น",
  },
  {
    eyebrow: "Automation Blueprint",
    title: "Foundation for Automation",
    body: "กระบวนการที่ถูกจัดเก็บในระบบใช้เป็น Blueprint สำหรับวางแผนและออกแบบ Automation ได้ ช่วยให้การลงทุนด้าน Digital Transformation แม่นยำขึ้น",
  },
  {
    eyebrow: "Mobile Access",
    title: "Mobile-Friendly Access",
    body: "เข้าถึง Process ได้จากทุกอุปกรณ์ผ่าน Web Browser และ Application รองรับทั้ง Online และ Offline",
  },
];

export const metadata = {
  title: "Process Management Platform | Aileen Solutions",
  description:
    "Process Management Platform by Aileen Solutions helps organizations manage, govern, and continuously improve workflows from one central system.",
};

export default function ProcessManagementPlatformPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <PmpHeroSection />

        <RpaBenefitsCards
          benefits={benefits}
          eyebrow="Key Benefits"
          title="ประโยชน์หลักของการใช้"
          subtitle="Process Management Platform"
          description="ออกแบบให้เห็นผลทั้งเรื่องความโปร่งใส การรักษาความรู้ขององค์กร และการสร้างมาตรฐานการทำงานที่ยั่งยืนในทุกระดับ"
        />

        <PmpFeaturesAccordion features={features} />

      </main>

      <SectionContactFooter />
    </div>
  );
}
