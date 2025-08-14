import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Counter from "../components/Counter";
import Dashboard from "../components/Dashboard";
import AntDesign from "../components/AntDesign";

// const Login = React.lazy(() => import("../components/Login"));
// const Counter = React.lazy(() => import("../components/Counter"));
// const Dashboard = React.lazy(() => import("../components/Dashboard"));
const AppRouter = () => {
    return (
        <div>
        <AntDesign/>

            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/counter" element={<Counter />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/antDesign" element={<AntDesign />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
