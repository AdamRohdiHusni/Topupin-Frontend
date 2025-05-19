"use client";
import Image from "next/image";
import Link from "next/link";

const categories = ["Mobile", "PC", "Console", "Voucher"];

const games = [
  // Mobile
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `mobile-${i+1}`,
    name: `Mobile Game ${i+1}`,
    category: "Mobile",
    image: `https://via.placeholder.com/300x200?text=Mobile+Game+${i+1}`,
    link: `/topup/mobile${i+1}`,
  })),
  // PC
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `pc-${i+1}`,
    name: `PC Game ${i+1}`,
    category: "PC",
    image: `https://via.placeholder.com/300x200?text=PC+Game+${i+1}`,
    link: `/topup/pc${i+1}`,
  })),
  // Console
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `console-${i+1}`,
    name: `Console Game ${i+1}`,
    category: "Console",
    image: `https://via.placeholder.com/300x200?text=Console+Game+${i+1}`,
    link: `/topup/console${i+1}`,
  })),
  // Voucher
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `voucher-${i+1}`,
    name: `Voucher ${i+1}`,
    category: "Voucher",
    image: `https://via.placeholder.com/300x200?text=Voucher+${i+1}`,
    link: `/topup/voucher${i+1}`,
  })),
];

export default function GameListSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Game Populer</h2>
        {categories.map((category) => {
          const gamesInCategory = games.filter((game) => game.category === category);
          if (gamesInCategory.length === 0) return null;
          return (
            <div key={category} className="mb-5">
              <h3 className="mb-3 fw-bold text-sunnyyellow">{category}</h3>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
                {gamesInCategory.slice(0, 10).map((game) => (
                  <div key={game.id} className="col">
                    <Link href={game.link} className="text-decoration-none">
                      <div className="card bg-brightwhite border-mintneon h-100 border shadow-sm hover-shadow transition">
                        <div className="position-relative" style={{ height: "120px" }}>
                          <Image
                            src={game.image}
                            alt={game.name}
                            fill
                            className="object-fit-cover rounded-top"
                          />
                        </div>
                        <div className="card-body text-center p-2">
                          <h6 className="card-title mb-0 small text-charcoal">{game.name}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 