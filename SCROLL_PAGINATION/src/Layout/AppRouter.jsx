import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentProfile from "../pages/StudentProfile";
import DashboardProfile from "../pages/DashboardProfile";

const Product = React.lazy(() => import("../pages/Products"));
const ProductsCopy = React.lazy(() => import("../pages/ProductsCopy"));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">Product</Link>
                    </li>
                    <li>
                        <Link to="/productcopy">ProductsCopy</Link>
                    </li>
                    <li>
                        <Link to="/student">Students Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                </ul>

                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/" element={<Product />} />
                        <Route path="/productcopy" element={<ProductsCopy />} />
                        <Route path="/student" element={<StudentProfile />} />
                        <Route path="/dashboard" element={<DashboardProfile />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
