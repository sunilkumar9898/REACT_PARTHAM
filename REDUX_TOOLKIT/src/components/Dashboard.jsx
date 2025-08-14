import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, edituser, getUsers } from "../redux/actions/userAction";
import { DatePicker } from "antd";
const Dashboard = () => {
    const user = useSelector((state) => state?.user?.userData);
    const dispatch = useDispatch();

    // State for edit mode
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");

    const getUserData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            dispatch(getUsers(response?.data));
        } catch (error) {
            console.log(error);
        }
    };

    const deleteData = (id) => {
        const updatedUsers = user.filter((user) => user?.id !== id);
        dispatch(deleteUser(updatedUsers));
    };

    const handleEdit = (id, currentName) => {
        setEditId(id);
        setEditName(currentName);
    };

    const handleSave = (id) => {
        const updatedUsers = user.map((user) =>
            user.id === id ? { ...user, name: editName } : user
        );
        dispatch(edituser(updatedUsers));
        setEditId(null);
        setEditName("");
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-200 p-6 ">
            <h2 className="text-center font-bold text-2xl mb-5">
                Wel Come To Dashboard
            </h2>
            {user?.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {user?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-indigo-200 p-5 text-center rounded">
                            {editId === item.id ? (
                                <input
                                    value={editName}
                                    onChange={(e) =>
                                        setEditName(e.target.value)
                                    }
                                    className="border p-1 rounded w-full"
                                />
                            ) : (
                                <h4 className="font-bold text-2xl">
                                    {item?.name}
                                </h4>
                            )}
                            <h5 className="font-semibold text-gray-700">
                                {item?.email}
                            </h5>
                            <h5 className=" font-semibold">
                                {`${item?.address?.street}, ${item?.address?.suite}, ${item?.address?.city}`}
                            </h5>
                            <div className="flex gap-5 justify-center mt-4">
                                <button
                                    className="border bg-red-500 text-white p-1 rounded cursor-pointer"
                                    onClick={() => deleteData(item?.id)}>
                                    Delete
                                </button>
                                {editId === item.id ? (
                                    <button
                                        className="border bg-green-700 text-white px-4 rounded cursor-pointer"
                                        onClick={() => handleSave(item.id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="border bg-blue-500 text-white px-4 rounded cursor-pointer"
                                        onClick={() =>
                                            handleEdit(item.id, item.name)
                                        }>
                                        Edit
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="w-20 h-20 border-5 border-gray-300 border-t-red-400 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
