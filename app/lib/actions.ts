"use server"

import {revalidateTag} from "next/cache";
import {API_URL} from "@/constants";

type Thread = {
    thread_id: number,
    title: string,
    description: string
    messages: Message[]
}

type Message = {
    id: number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date | null,
    message: string,
    thread_id: number
}

export async function getThreadDetails(qrContent: string): Promise<Thread | undefined> {
    try {
        const res = await fetch(`${API_URL}/threads/${qrContent}`)
        const data = await res.json()
        console.log("data at get thread details",data)
        return data
    } catch (e) {
        console.log("error")
    }
}

export async function sendThreadMessage(qrContent: string, message: string) {
    try {
        const res = await fetch(`${API_URL}/threads/${qrContent}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message
            })
        })
        const data = await res.json()
        revalidateTag('send-thread-message');
        return data
    } catch (e) {
        console.log("error")
    }
}