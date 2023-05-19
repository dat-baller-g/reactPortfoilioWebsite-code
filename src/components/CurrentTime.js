import React from "react";

export default function CurrentTime(){
    const date = new Date().toString().split(" ").splice(4, 1).join(" ");
    return(
        <h1 className="underline text-left font-bold pb-2 pl-2">
            {date}
        </h1>
    )
}