import Contact from "@/views/Contact";

export const metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อทีมงาน Aileen Solutions เพื่อปรึกษาโซลูชันด้าน Digital Transformation, Process Automation และ AI สำหรับองค์กรของคุณ",
  alternates: {
    canonical: "https://www.aileensolutions.com/contact",
  },
  openGraph: {
    title: "ติดต่อเรา | Aileen Solutions",
    description:
      "ร่วมสร้างความสำเร็จทางธุรกิจไปกับเรา ทีมงานพร้อมให้คำปรึกษาด้าน Digital Transformation",
    url: "https://www.aileensolutions.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
