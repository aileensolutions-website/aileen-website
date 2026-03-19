import Link from "next/link";

export const metadata = {
  title: "404 — ไม่พบหน้า",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060A14] flex flex-col items-center justify-center text-white text-center px-6">
      <p className="text-7xl font-bold text-white/10">404</p>
      <h1 className="mt-4 text-2xl font-semibold">ไม่พบหน้าที่คุณต้องการ</h1>
      <p className="mt-2 text-sm text-white/50">
        หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
      >
        กลับหน้าแรก
      </Link>
    </div>
  );
}
