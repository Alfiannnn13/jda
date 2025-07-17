"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, price: Number(price) };

    if (editId !== null) {
      await fetch(`/api/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setEditId(null);
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setName("");
    setPrice("");
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId !== null ? "Update" : "Tambah"} Produk
        </button>
      </form>

      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">
                Rp{product.price.toLocaleString()}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-500"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
