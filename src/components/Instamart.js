import React, { useState } from "react";


const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="flex flex-col px-4 mx-1 my-2 border border-black py-2">
            <div className="flex justify-between my-2">
                <h1 className="font-bold text-2xl">{title}</h1>
                <button className="bg-yellow-200 rounded-md p-2 hover:bg-yellow-400" onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
            </div>
            {isVisible && <p>{description}</p>}

        </div>
    )
}

const Instamart = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="my-24">
            <Section title={"About"} isVisible={activeIndex === 0} setIsVisible={(display) => {
                if (display) return setActiveIndex(0)
                else return setActiveIndex("")
            }} description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />

            <Section title={"Team"} isVisible={activeIndex === 1} setIsVisible={(display) => {
                if (display) return setActiveIndex(1)
                else return setActiveIndex("")
            }} description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />

            <Section title={"Career"} isVisible={activeIndex === 2} setIsVisible={(display) => {
                if (display) return setActiveIndex(2)
                else return setActiveIndex("")

            }} description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />

        </div>
    )
}


export default Instamart;