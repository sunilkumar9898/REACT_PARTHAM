import { useState } from "react"

export const useCounter = (intialValue) => {

    const [count, setCount] = useState(intialValue || 10);

    const increase = () => {
        setCount((count) => count + 1)
    };

    const decrease = () => {
        count <= 0 ? alert("Value is already 0. Please increase it first.") : setCount((count) => count - 1)
    };

    const increaseBYFive = () => {
        setCount((count) => count + 5)
    };

    const decreaseByFive = () => {
        setCount((count) => count - 5)
    };

    return {count , increase, decrease , increaseBYFive , decreaseByFive}
}