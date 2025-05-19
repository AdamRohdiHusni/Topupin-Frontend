import Link from "next/link";
import Button from "@/components/Button";

const dummyHistory = [
  { id: 1, type: "Top Up ID Game", status: "Sukses", waktu: "2025-05-12 10:00" },
  { id: 2, type: "Voucher Game", status: "Sukses", waktu: "2025-05-11 19:00" },
];

export default function HistoryPage() {
  return (
    <section className="max-w-2xl mx-auto bg-brightwhite rounded-xl shadow p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-skyblue mb-2">Riwayat Transaksi</h1>
      <ul className="flex flex-col gap-4">
        {dummyHistory.map((item) => (
          <li key={item.id} className="flex flex-col md:flex-row md:items-center justify-between bg-brightwhite rounded p-4 border border-gray-100 shadow-sm">
            <div>
              <div className="font-semibold text-charcoalgrey">{item.type}</div>
              <div className="text-xs text-charcoalgrey/80">{item.waktu}</div>
            </div>
            <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-skyblue text-brightwhite text-xs font-bold">{item.status}</span>
          </li>
        ))}
      </ul>
      <Link href="/" passHref legacyBehavior>
        <a className="inline-block mt-4 text-center w-full md:w-auto"><Button variant="action">Kembali ke Home</Button></a>
      </Link>
    </section>
  );
} 