import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUP from "../Pages/SignUP";
import CreatePost from "../Pages/CreatePost";
import Post from "../Pages/Post";
import PageNotFound from "../Pages/PageNotFound";
import Protected from "./Protected";

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/signup"} element={<SignUP />} />
                    <Route path={"/secure"} element={<Protected />}>
                        <Route path={"createpost"} element={<CreatePost />} />
                        <Route path={"post"} element={<Post />} />
                    </Route>
                    <Route path={"*"} element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
