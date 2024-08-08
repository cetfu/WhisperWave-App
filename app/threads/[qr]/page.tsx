import React from 'react';
import {getThreadDetails} from "@/lib/actions";



async function Page({params: {qr}}: { params: { qr: string } }) {
    const res = await getThreadDetails(qr)
    console.log("page",res)
    return (
        <div></div>
    );
}

export default Page;