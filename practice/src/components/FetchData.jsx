import React, { useEffect, useState } from "react";

const FetchData = () => {
    const[user,setUser] = useState([])
    const fetchUserDetils = async () => {
        try {
            const data = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(data, data);
            const parseData = await data.json();
            setUser(parseData)
            console.log(parseData, " prseData");
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        fetchUserDetils();
    }, []);

    return <div>
        {user?.map((data) => {
            return (
                <ul key={data?.id}>
                    <li>User Name : - {data?.username}</li>
                </ul>
            );
})}

    </div>;
};

export default FetchData;
