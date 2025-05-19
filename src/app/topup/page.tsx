import Link from "next/link";
import CardProduct from "@/components/CardProduct";

const topupOptions = [
  {
    type: "id-game",
    title: "Top Up ID Game",
    desc: "Isi saldo langsung ke akun game favoritmu.",
    icon: "🎮",
  },
  {
    type: "login",
    title: "Top Up Login",
    desc: "Transaksi top up dengan login, aman dan praktis.",
    icon: "🔑",
  },
  {
    type: "voucher",
    title: "Voucher Game",
    desc: "Beli voucher game digital berbagai platform.",
    icon: "🎫",
  },
];

export default function TopupPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-skyblue">Pilih Jenis Top Up</h1>
        </div>
        <div className="col-12 col-md-10">
          <div className="row g-4">
            {topupOptions.map((opt) => (
              <div key={opt.type} className="col-12 col-md-4">
                <Link href={`/order?type=${opt.type}`} className="text-decoration-none" aria-label={opt.title}>
                  <CardProduct 
                    icon={opt.icon} 
                    title={opt.title} 
                    desc={opt.desc}
                    className="h-100 shadow-sm hover-shadow transition"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 