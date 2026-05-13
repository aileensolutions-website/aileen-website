import News from "@/views/News";

export const metadata = {
  title: "ข่าวสารและกิจกรรม",
  description:
    "ติดตามข่าวสารและกิจกรรมล่าสุดจาก Aileen Solutions ครอบคลุมงานสัมมนา เทคโนโลยีอุตสาหกรรม ความปลอดภัย และการประยุกต์ใช้ AI, Process และ Automation",
  alternates: {
    canonical: "https://www.aileensolutions.com/news",
  },
  openGraph: {
    title: "ข่าวสารและกิจกรรม | Aileen Solutions",
    description:
      "รวมข่าวสารและกิจกรรมล่าสุดจาก Aileen Solutions ทั้งด้านความปลอดภัย เทคโนโลยีอุตสาหกรรม และ AI-Driven Transformation",
    url: "https://www.aileensolutions.com/news",
  },
};

export default function NewsPage() {
  return <News />;
}
