import Home from "@/views/Home";

export const metadata = {
  title: "หน้าแรก | Aileen Solutions",
  description:
    "ยกระดับการทำงานทั้งองค์กรด้วย Digital Process & Automation พร้อม AI และ Software Solutions ที่เชื่อถือได้ — Simplify Work, Amplify Value",
  alternates: {
    canonical: "https://www.aileensolutions.com",
  },
  openGraph: {
    title: "Aileen Solutions | Simplify Work, Amplify Value",
    description:
      "ยกระดับการทำงานทั้งองค์กรด้วย Digital Process & Automation พร้อม AI และ Software Solutions ที่เชื่อถือได้",
    url: "https://www.aileensolutions.com",
  },
};

export default function HomePage() {
  return <Home />;
}
