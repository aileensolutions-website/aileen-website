import AboutUs from "@/views/AboutUs";

export const metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "Aileen Solutions — บริษัทที่ปรึกษาด้าน Digital Transformation ผู้เชี่ยวชาญด้าน Process Automation, AI, Software และ Quality Management สำหรับองค์กรชั้นนำ",
  alternates: {
    canonical: "https://www.aileensolutions.com/about",
  },
  openGraph: {
    title: "เกี่ยวกับเรา | Aileen Solutions",
    description:
      "ทีมงานผู้เชี่ยวชาญด้าน Digital Transformation พร้อมช่วยองค์กรคุณก้าวสู่อนาคตด้วย Process Automation และ AI",
    url: "https://www.aileensolutions.com/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
