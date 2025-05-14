import React from "react";
import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <h1>OOps!</h1>
            <h2>Something went wrong😓😔</h2>
            <h3>{err.data}</h3>
        </>
    )
}

export default Error;