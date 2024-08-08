"use server"

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
        const res = await fetch(`http://localhost:3000/api/threads/${qrContent}`)
        return res.json()
    } catch (e){
        console.log("error")
    }
}