import React from "react";

interface TopProps {
    title : string
    className?: string
}

export const Top = (props : TopProps) => {
    return (
            <h1>{props.title}</h1>
    )
}