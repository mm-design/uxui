"use client";
import { useState } from "react";

function Accordion(props){

    const objective = "Objective";
    const deliverables = "Deliverables";
    let buttonLabel = "Expand";

    const [isShowing, setIsShowing] = useState(false);

    const toggle = (event) => {
        setIsShowing(!isShowing);
    };

    return (
        <div className="relative md:flex md:flex-row py-5 md:py-10">
            <button onClick={toggle} className="absolute top-[24px] right-0 text-[13px] uppercase underline md:hidden">{!isShowing ? buttonLabel = "Expand" : buttonLabel = "Collapse" }</button>
            <h3 className="pr-[80px] md:basis-1/3 md:mr-4">{props.title}</h3>

            <div className={isShowing ? "block transition-all duration-500 min-h-fit h-[100px] opacity-1 ease-in-out mt-10 md:mt-0 md:flex md:basis-2/3" : "block transition-all duration-500 ease-in-out h-0 mt-1 md:mt-0 md:h-auto md:flex md:basis-2/3 opacity-0 overflow-hidden md:opacity-100 md:overflow-visible"}>
                <div className="md:basis-1/2 md:mr-4">
                    <p className="mb-2 uppercase text-[--dark-secondary]">{objective}</p>
                    <p className="mb-8 md:mb-0 text-[--dark-secondary]">{props.objective}</p>
                </div>
                <div className="md:basis-1/2 md:ml-4">
                    <p className="mb-2 uppercase text-[--dark-secondary]">{deliverables}</p>
                    <p className="text-[--dark-secondary]">{props.deliverables}</p>
                </div>
            </div>
        </div>
    );
}
export default Accordion;