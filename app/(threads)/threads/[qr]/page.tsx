import React from 'react';
import {getThreadDetails} from "@/lib/actions";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {cn} from "@/lib/utils";
import {notFound} from "next/navigation"
import {Threads} from "@/(threads)/threads/[qr]/_components/threads";


async function Page({params: {qr}}: { params: { qr: string } }) {
    const res = await getThreadDetails(qr)

    if (!res) {
        notFound()
    }

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
                <Threads messages={res.messages} qrContent={qr} />
            </CardContent>
        </Card>
    );
}

export default Page;