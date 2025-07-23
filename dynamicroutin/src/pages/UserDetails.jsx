// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const UserDetails = () => {
//   const [data, setData] = useState()
//   console.log(data);

//   const { id } = useParams()

//   const fetchData = async() => {
//   try {
//       const res = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${id}`
//     );

//     const parseData = await res.json()
//     setData(parseData)
//   } catch (error) {
// console.log(error);

//   }
//   }

//   useEffect(() => {
//     if (id) {
//       fetchData()
//     }
//   }, [id])

//     const getShortBody = (text = "") => {
//         return text.split(" ").slice(0, 10).join(" ") + "...";
//     };


//   return (
//       <div>
//           <h5> body : - {getShortBody(data?.body)}</h5>
//           <h5> Title : - {data?.title}</h5>
//           <h5> id : - {data?.id}</h5>
//           <h5> userId : - {data?.userId}</h5>
//       </div>
//   );
// }

// export default UserDetails


import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
    const [data, setData] = useState();
    const [showFull, setShowFull] = useState(false); // For toggling text
    const { id } = useParams();
    const [searchParam] = useSearchParams()
    const userId = searchParam.get("userId");
    console.log("name",userId);



    const fetchData = async () => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const parseData = await res.json();
            setData(parseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const getShortBody = (text = "") => {
        return text.split(" ").slice(0, 10).join(" ") + "...";
    };

    return (
        <div>
            <h5>
                Body: - {showFull ? data?.body : getShortBody(data?.body)}
                <span
                    onClick={() => setShowFull(!showFull)}
                    style={{
                        color: "blue",
                        cursor: "pointer",
                        marginLeft: "10px",
                    }}>
                    {showFull ? "Show Less" : "Read More"}
                </span>
            </h5>
            <h5>Title: - {data?.title}</h5>
            <h5>ID: - {data?.id}</h5>
            <h5>User ID: - {data?.userId}</h5>
        </div>
    );
};

export default UserDetails;

