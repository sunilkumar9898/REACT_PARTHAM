import { useState } from "react";

const initialValue = {
     title: "",
     desc: "",
};
const ToDoList = () => {
     const [toDoList, setToDoList] = useState(initialValue);
    const [data, setData] = useState([]);
    const [error, setError] = useState({})


 const handleChange = (e) => {
      const { name, value } = e.target;
      setToDoList({ ...toDoList, [name]: value });
};


    const validate = () => {
        const newError = {};
        if(!toDoList.title) newError.title = "title is required"
        if (!toDoList.desc) newError.desc = "Description  is required"
        return newError
}

 const handleSubmit = (e) => {
     e.preventDefault();
     const validateError = validate();
     if (Object.keys(validateError).length > 0) {
         setError(validateError);
     } else {
      setData([...data, toDoList]);
         setToDoList(initialValue);
        //  setError({})
     }

 };

 return (
     <div>
         <h1>To DO List</h1>
         <form onSubmit={handleSubmit}>
             <div>
                 <input
                     type="text"
                     name="title"
                     value={toDoList.title}
                     onChange={handleChange}
                 />
                 {error.title && <p style={{ color: "red" }}>{error.title}</p>}
             </div>
             <div>
                 <input
                     type="text"
                     name="desc"
                     value={toDoList.desc}
                     onChange={handleChange}
                 />

                 {error.desc && <p style={{ color: "red" }}>{error.desc}</p>}
             </div>
             {/* <button
                     onClick={(e) => handleSubmit(e)}
                     disabled={
                          toDoList.title === "" || toDoList.desc === ""
                     }>
                     Submit */}
             <button type="submit">Submit</button>
         </form>

         <div>
             {data?.map((item) => {
                 return (
                     <div key={item.title}>
                         <p>item:-{item.title}</p>
                         <p>description:-{item.desc}</p>
                     </div>
                 );
             })}
         </div>
     </div>
 );
};

export default ToDoList;