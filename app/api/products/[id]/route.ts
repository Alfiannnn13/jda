import { NextRequest, NextResponse } from "next/server";
import { products } from "../data";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await req.json();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  products.splice(index, 1);
  return NextResponse.json({ success: true });
}
