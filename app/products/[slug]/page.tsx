import Navbar from "@/app/components/Navbar";
import { notFound } from "next/navigation";

const productData: Record<string, { name: string; desc: string }> = {
  "aplikasi-keuangan": {
    name: "Aplikasi Keuangan",
    desc: "Kelola keuangan harian Anda dengan mudah dan efisien.",
  },
  "template-portofolio": {
    name: "Template Portofolio",
    desc: "Template web siap pakai untuk portofolio developer.",
  },
  "konversi-pdf-tools": {
    name: "Konversi PDF Tools",
    desc: "Ubah berbagai dokumen ke PDF secara cepat dan praktis.",
  },
};

type Props = {
  params: { slug: string };
};

export default function ProductDetail({ params }: Props) {
  const product = productData[params.slug];

  if (!product) {
    notFound(); // kalo slug gak ditemukan → ke halaman 404
  }

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
        <h1 style={{ fontSize: "2rem", color: "#222", marginBottom: "1rem" }}>
          {product.name}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>{product.desc}</p>
      </main>
    </>
  );
}
