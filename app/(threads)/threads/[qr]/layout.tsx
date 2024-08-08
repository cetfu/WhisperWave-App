import React from 'react';
import {getThreadDetails} from "@/lib/actions";
import {Metadata} from "next";

export async function generateMetadata({ params }: {params: {qr: string}}): Promise<Metadata> {

    const details = await getThreadDetails(params.qr)

    return {
        title: details?.title,
        description: details?.description
    }
}

function Layout({children}: {children: React.ReactNode}) {
    return children
}

export default Layout;