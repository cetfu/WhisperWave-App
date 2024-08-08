"use client"
import React, {startTransition, useState} from "react";
import ThreadMessage from "@/components/thread-message";
import {sendThreadMessage} from "@/lib/actions";

type Message = {
    id: number,
    message: string,
    created_at: Date,
}

export function Threads({messages, qrContent}: { messages: Message[], qrContent: string }) {
    const [optimisticMessages, setOptimisticMessages] = useState<Message[]>(messages)

    const addOptimisticMessage = (message: string) =>{
        const lastMessage = optimisticMessages.at(-1)
        setOptimisticMessages(m => [
            {
                message: message,
                created_at: new Date(),
                id: lastMessage ? lastMessage.id + 1 : 1
            }, ...m])
    }

    return (
        <>
            <ThreadMessage createdAt={new Date()} newThread={true} onClickSend={(message) => {
                startTransition(async () =>{
                    startTransition(() =>{
                        addOptimisticMessage(message)
                    })
                    await sendThreadMessage(qrContent, message)
                })
            }}/>
            {optimisticMessages && optimisticMessages.map(message => (
                <ThreadMessage message={message.message} createdAt={message.created_at} key={message.id}/>
            ))}
        </>
    )
}