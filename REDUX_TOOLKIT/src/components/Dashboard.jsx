import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logOut } from "../redux/actions/authAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/userAction";
const Dashboard = () => {

    // const user = useSelector((state) => state.auth.user);
    // const navigate = useNavigate();
  // const dsipatch = useDispatch();

  const user = useSelector((state) => state?.user?.userData);
  console.log(user,'user');

      const dispatch = useDispatch();


    // const handleLogOut = () => {
    //     dsipatch(logOut());
    //     navigate("/");
    // };

    const getUserData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
          // setData(response?.data)
          dispatch(getUsers(response?.data));
        } catch (error) {
            console.log(error);
        }
  };

const deleteData = (id) => {
    const updatedUsers = user.filter((user) => user?.id !== id);
    dispatch(getUsers(updatedUsers));
};

    useEffect(() => {
        getUserData();
    },[]);

    return (
        <div className="min-h-screen bg-gray-200 p-6 ">
            <h2 className="text-center font-bold text-2xl mb-5">
                Wel Come To Dashboard
            </h2>
            {user?.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {user?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-indigo-200 p-5 text-center rounded">
                            <h4>{item?.name}</h4>
                            <h5>{item?.email}</h5>
                            <h5>
                                {`${item?.address?.street}, ${item?.address?.suite},
                            ${item?.address?.city}`}
                            </h5>
                            <div className="flex gap-5 justify-center mt-4">
                          <button className="border bg-red-500 text-white p-1 rounded cursor-pointer"
                            onClick={() => deleteData(item?.id)}>
                                    Delete
                                </button>
                                <button className="border bg-blue-500 text-white px-4 rounded cursor-pointer">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
