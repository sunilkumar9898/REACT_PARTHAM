import React, { useEffect, useState } from 'react'
import { Navigate, useParams, useSearchParams } from 'react-router-dom'

const UserDetails = () => {
    const [user, setUser] = useState([])
    console.log(user,'user');

    const { id } = useParams();
    console.log(id);

    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId")

    console.log(userId,'userId');
    


    const fetchUserDetils = async () => {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const parseData = await data.json();
            setUser([parseData]);
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserDetils();
    }
    }, [id]);


  return (
      <div>
          {/* <h1>{ user?.username}</h1> */}
          {user?.map((data) => {
              return (
                  <ul key={data?.id}>
                      <li >User Name : - {data?.username}</li>
                  </ul>
              );
          })}
      </div>
  );
}

export default UserDetails
