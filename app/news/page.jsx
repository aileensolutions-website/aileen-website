import ComingSoon from "@/views/Comingsoon";

export const metadata = {
  title: "ข่าวสารและกิจกรรม",
  description:
    "ติดตามข่าวสาร กิจกรรม และความเคลื่อนไหวล่าสุดจาก Aileen Solutions ผู้นำด้าน Digital Transformation",
  alternates: {
    canonical: "https://www.aileensolutions.com/news",
  },
  openGraph: {
    title: "ข่าวสารและกิจกรรม | Aileen Solutions",
    description: "ข่าวสารและกิจกรรมล่าสุดจาก Aileen Solutions — กำลังเตรียมเปิดตัว",
    url: "https://www.aileensolutions.com/news",
  },
};

export default function NewsPage() {
  return <ComingSoon />;
}
