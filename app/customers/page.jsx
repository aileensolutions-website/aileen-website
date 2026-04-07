import Customers from "@/views/Customers";

export const metadata = {
  title: "ลูกค้าของเรา",
  description:
    "ลูกค้าชั้นนำที่ไว้วางใจ Aileen Solutions ในการพัฒนา Digital Transformation รวมถึงบริษัทชั้นนำในกลุ่มพลังงาน อุตสาหกรรม และบริการ",
  alternates: {
    canonical: "https://www.aileensolutions.com/customers",
  },
  openGraph: {
    title: "ลูกค้าของเรา | Aileen Solutions",
    description: "ลูกค้าชั้นนำที่ไว้วางใจ Aileen Solutions — กำลังเตรียมเปิดตัว",
    url: "https://www.aileensolutions.com/customers",
  },
};

export default function CustomersPage() {
  return <Customers />;
}
