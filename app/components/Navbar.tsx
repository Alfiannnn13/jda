"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (href: string) => ({
    color: pathname === href ? "#00d8ff" : "white",
    textDecoration: "none",
    fontWeight: pathname === href ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }}
    >
      <h1 style={{ color: "#00d8ff", margin: 0 }}>e-Katalog</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/" style={linkStyle("/")}>
          Beranda
        </Link>
        <Link href="/about" style={linkStyle("/about")}>
          Tentang
        </Link>
        <Link href="/products" style={linkStyle("/products")}>
          Products
        </Link>
      </div>
    </nav>
  );
}
