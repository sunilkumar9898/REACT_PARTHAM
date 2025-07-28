import { useState } from "react"

export const UseForm = () => {
    const [value, setValue] = useState({});
    const [data, setData] = useState([]);

console.log(data,'value');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev)=>({...prev ,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data,value]);
        setValue({})
    }
    return { value, handleChange, handleSubmit }
}