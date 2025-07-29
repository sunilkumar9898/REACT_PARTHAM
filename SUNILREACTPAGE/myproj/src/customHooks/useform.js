import { useState } from "react"

export const useForm = (intialValue) => {
    const [value, setValue] = useState(intialValue ?? {});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev)=>({...prev ,[name]:value}))
    }

    const resetValue = () => {
        setValue(intialValue)
    }

    return { value, handleChange, resetValue }
}