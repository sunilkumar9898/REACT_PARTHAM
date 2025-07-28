import { useState } from "react"

export const useForm = (intialValue) => {
    const [values, setValues] = useState(intialValue);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev)=>({...prev,[name]:value}))
    }
    return[values, handleChange]
}

