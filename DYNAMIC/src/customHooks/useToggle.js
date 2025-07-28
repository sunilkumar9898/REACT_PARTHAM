import { useCallback } from "react";
import { useState } from "react"

export const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return [value, toggle];
}