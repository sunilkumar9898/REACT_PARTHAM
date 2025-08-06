import React, { useCallback, useState } from "react";
import UseCallbackButton from "./UseCallbackButton";

const About = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <div>
            <h1>UseCallback Example </h1>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <UseCallbackButton onclick={handleClick} />
        </div>
    );
};

export default About;
