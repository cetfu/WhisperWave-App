import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: { params: { qr: string } }) {

    const res = await fetch("http://localhost:3200/threads/" + params.qr)
    const data = await res.json()

    return new NextResponse(JSON.stringify(data), {
        status: 200,
    });
}

export async function POST(request: Request) {
}