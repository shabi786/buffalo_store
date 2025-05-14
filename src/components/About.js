import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="my-24">
            <h1>Hello from About section!!</h1>
            <Outlet />
        </div>
    )
}

export default About;