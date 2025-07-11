import Navbar from "../components/Navbar";

export default function AboutPage() {
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
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
          contoh Website e-Katalog
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste
          pariatur rem inventore ducimus esse quod consequatur velit,
          praesentium, fugit aliquam. Ab necessitatibus consequuntur adipisci
          voluptatum error amet tempore facilis labore mollitia reprehenderit
          aut, cum voluptatem sit corporis distinctio aliquid excepturi iusto?
          Commodi, qui? Optio voluptatibus recusandae incidunt repudiandae ad?
        </p>
      </main>
    </>
  );
}
