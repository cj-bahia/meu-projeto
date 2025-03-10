import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: 1, nome: "Jaasiel"},
        { id: 2, nome: "Joshua"},
        { id: 3, nome: "Dominic"},
        { id: 4, nome: "Judah"},
    ]);
}