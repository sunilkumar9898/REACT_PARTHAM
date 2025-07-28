import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [user, setUser] = useState([])
    // const [post, setPosts] = useState()
console.log(user,'user');

    const fethcUser = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = response?.data;
        if (response?.status === 200) {
            setUser(data)
        } else {
        console.log("Data not fatch ");

        }
    }
    catch (error) {
       console.log(error);
    }
    }


    const postUser = async () => {
        const payload = {
            title:"Hello Sunil"
        }
        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",payload
            );
            const data = response?.data;
        console.log(data,'datata');

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
           fethcUser()
    }, [])


  return (
    <div>
          {user.map((item) => (
              <div>
                  <p>{ item.name}</p>
                  <p>{ item.email}</p>
                  <p>{ item.phone}</p>
                  <p>{ item.id}</p>
    </div>
          ))}


          <button onClick={(()=>postUser())}>post</button>
    </div>
  )
}

export default Axios
