import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/countAction";
const Counter = () => {
        const count = useSelector((state) => state.counter.count);
        const dispatch = useDispatch();
    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <div className="block m-auto bg-green-600 w-[300px] p-6 text-white text-center rounded ">
                <h1>Redux (without toolkit)</h1>
                <h3 className="mb-10">count : {count}</h3>
                <button
                    className="bg-indigo-500 mx-4 rounded text-white p-1 cursor-pointer"
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button
                    className="bg-indigo-500 mx-4 rounded text-white p-1 cursor-pointer "
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter
