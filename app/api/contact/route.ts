import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, correo, empresa, telefono, mensaje } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, correo y mensaje son requeridos" },
        { status: 400 },
      );
    }

    // Log the lead server-side
    console.info("📬 Nuevo lead desde operasas.com:", {
      nombre,
      correo,
      empresa: empresa || "—",
      telefono: telefono || "—",
      fecha: new Date().toLocaleDateString("es-CO"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}