import {NextRequest, NextResponse} from "next/server";
import {API_URL} from "@/constants";

export async function GET(request: NextRequest, {params}: { params: { qr: string } }) {

    const res = await fetch(API_URL + "/threads/" + params.qr)
    const data = await res.json()

    return new NextResponse(JSON.stringify(data), {
        status: 200,
    });
}

export async function POST(request: Request, {params}: { params: { qr: string } }) {
    const requestData = await request.json()

    const res = await fetch(API_URL + "/threads/" + params.qr, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: requestData.message
        })
    })

    const data = await res.json()

    return new NextResponse(JSON.stringify(data), {
        status: 200,
    });
}