import React, {useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function ThreadMessage(props: {
    message?: string,
    createdAt: Date,
    newThread?: boolean,
    onClickSend?: (value: string) => void
}) {

    return (
        <Card className={"my-5 px-0 py-1"}>
            <CardContent className={"text-pretty px-2"}>
                {props.newThread ? (
                    <div className={"my-1"}>
                        <Label htmlFor={"send-message"}>
                            Send a Message
                        </Label>
                        <Input id={"send-message"} name={"message"} />
                    </div>
                ) : props.message}
            </CardContent>
            <CardFooter className={"flex justify-between items-end px-2 py-0"}>
                <div className={"my-2"}>{props.newThread &&
                    <Button type={"submit"}>Send Message</Button>}</div>
                <p suppressHydrationWarning>{new Date(props.createdAt).toLocaleString()}</p>
            </CardFooter>
        </Card>
    );
}

export default ThreadMessage;