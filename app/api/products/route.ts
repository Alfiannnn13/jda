// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { products } from "./data"; // ⬅️ ambil dari shared file

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = {
    id: Date.now(),
    name: body.name,
    price: body.price,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
