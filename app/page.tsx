"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";

const products = [
  { name: "Aplikasi Keuangan", slug: "aplikasi-keuangan" },
  { name: "Template Portofolio", slug: "template-portofolio" },
  { name: "Konversi PDF Tools", slug: "konversi-pdf-tools" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          📦 e-Katalog Produk Digital
        </h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.slug}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Link
                href={`/products/${product.slug}`}
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  color: "#0070f3",
                }}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
