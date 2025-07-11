import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #1c1c1c, #2c3e50)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }

        .btn-back {
          background: #00d8ff;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          color: #000;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .btn-back:hover {
          background: #00c8e6;
        }
      `}</style>

      <h1
        style={{
          fontSize: "5rem",
          marginBottom: "0.5rem",
          animation: "bounce 1s infinite alternate",
        }}
      >
        404
      </h1>

      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Oops! Halaman tidak ditemukan
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "2rem",
          maxWidth: "500px",
          opacity: 0.85,
        }}
      >
        Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        Yuk kembali ke beranda!
      </p>

      <Link href="/" className="btn-back">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
