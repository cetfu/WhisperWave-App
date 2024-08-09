import React from 'react';
import {getThreadDetails, sendThreadMessage} from "@/lib/actions";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {cn} from "@/lib/utils";
import {notFound} from "next/navigation"
import ThreadMessage from "@/components/thread-message";

export const dynamic = "force-dynamic"
export const revalidate = 0

async function Page({params: {qr}}: { params: { qr: string } }) {
    const res = await getThreadDetails(qr)

    if (!res) {
        notFound()
    }

    const send = async (formData: FormData) => {
        "use server"

        const message = formData.get("message") as string
        await sendThreadMessage(qr, message)
    }

    console.log("res at page", res)

    return (
        <Card className={"w-full h-full grow"}>
            <CardHeader>
                <CardTitle>{res?.title}</CardTitle>
                <CardDescription>{res?.description}</CardDescription>
            </CardHeader>
            <CardContent className={cn(
                "grid grid-cols-1 gap-x-5",
                "sm:grid-cols-2",
                "md:grid-cols-2",
                "lg:grid-cols-3",
                "xl:grid-cols-4",
            )}>
                <form action={send}>
                    <ThreadMessage createdAt={new Date()} newThread={true}/>
                </form>
                {res.messages && res.messages.map(message => (
                    <ThreadMessage message={message.message} createdAt={message.created_at} key={message.id}/>
                ))}
            </CardContent>
        </Card>
    );
}

export default Page;