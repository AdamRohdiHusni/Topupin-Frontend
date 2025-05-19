export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto bg-brightwhite rounded-xl shadow p-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-skyblue mb-2">Tentang TOPUPIN</h1>
      <p className="text-charcoalgrey text-lg">
        <b>TOPUPIN</b> adalah marketplace top up game yang menghadirkan kemudahan, kecepatan, dan keamanan dalam setiap transaksi digital Anda. Kami menyediakan layanan top up ID game, login, dan voucher untuk berbagai platform populer dengan harga terbaik.
      </p>
      <ul className="list-disc pl-6 text-charcoalgrey/80">
        <li>Proses transaksi instan & terpercaya</li>
        <li>Didukung sistem keamanan modern</li>
        <li>Promo menarik & harga bersaing</li>
        <li>Layanan pelanggan responsif</li>
      </ul>
      <div className="mt-4">
        <h2 className="font-semibold text-charcoalgrey mb-1">Kontak</h2>
        <p>Email: <a href="mailto:support@topupin.com" className="text-skyblue underline">support@topupin.com</a></p>
      </div>
    </section>
  );
} 