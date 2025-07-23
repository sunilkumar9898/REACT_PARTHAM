import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

const User = () => {

    const navigate = useNavigate();




    const [user, setUser] = useState([]);
    const fetchUserDetils = async () => {
        try {
            const data = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const parseData = await data.json();
            setUser(parseData);
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        fetchUserDetils();
    }, []);

    const updateRowData = (data) => {
            navigate(`/user/${data?.id}?userId=${data?.id}`);
        };

  return (
      <div>
          {user?.map((data) => {
              return (
                  <ul key={data?.id}>
                      <li onClick={() => updateRowData(data)}>
                          User Name : - {data?.username}
                      </li>
                  </ul>
              );
          })}
      </div>
  );
}

export default User
