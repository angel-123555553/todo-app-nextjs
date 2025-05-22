// src/app/api/todos/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/todos  – list all
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(todos);
}

// POST /api/todos  – create one
export async function POST(req: NextRequest) {
  const { title } = await req.json();
  const todo = await prisma.todo.create({ data: { title } });
  return NextResponse.json(todo, { status: 201 });
}

// PUT /api/todos  – toggle completed
export async function PUT(req: NextRequest) {
  const { id, completed } = await req.json();
  const todo = await prisma.todo.update({ where: { id }, data: { completed } });
  return NextResponse.json(todo);
}

// DELETE /api/todos  – remove one
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Todo deleted" });
}
