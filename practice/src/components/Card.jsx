import React, { useState } from "react";

const Card = (props) => {
    const { text, setText } = props;
    console.log(props,'props');

    const [color, setColor] = useState("white");
    const _colorChnage = () => {
        setColor(color === "white" ? "red" : "white");
    };

    const _textChnage = () => {
        setText(
            text ===
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel"
                ? "Hello Sunil"
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel"
        );
    }
    return (
        <div style={{ width:100, margin:"200px auto"}}>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid red",
                    background: color,
                }}>
                <p style={{padding:"10px" , margin:"20px"}}>
                    {text}
                </p>
            </div>
            <button style={{margin:"10px" , width:"185px" , padding:"10px 0px"}} onClick={_colorChnage}>Color Chnage</button>
            <button style={{margin:"10px" , width:"185px" , padding:"10px 0px"}} onClick={_textChnage}>text Chnage</button>
        </div>
    );
};

export default Card;
