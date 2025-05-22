"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import Button from "@/components/Button";

const typeLabel: Record<string, string> = {
  "id-game": "Top Up ID Game",
  login: "Top Up Login",
  voucher: "Voucher Game",
};

function OrderForm() {
  const params = useSearchParams();
  const router = useRouter();
  const type = params.get("type") || "id-game";
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulasi order, redirect ke history
    router.push("/history");
  }

  return (
    <div className="card-body p-4">
      <h1 className="card-title h3 fw-bold text-skyblue mb-4">{typeLabel[type]}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label fw-medium">
            {type === "voucher" ? "Kode Voucher" : type === "login" ? "Username/Email" : "ID Game"}
          </label>
          <input
            type="text"
            required
            value={input}
            onChange={e => setInput(e.target.value)}
            className="form-control"
            placeholder={type === "voucher" ? "Masukkan kode voucher" : type === "login" ? "Masukkan username/email" : "Masukkan ID game"}
          />
        </div>
        <Button type="submit" variant="action" className="w-100">Pesan Sekarang</Button>
      </form>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <Suspense fallback={<div className="card-body p-4">Loading...</div>}>
              <OrderForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
} 