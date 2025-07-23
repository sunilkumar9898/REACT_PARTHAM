import React from "react";
import {  useSearchParams } from "react-router-dom";

const Dashbord = () => {
    // const { Dashbord } = useParams()
    //   const formData = JSON.parse(decodeURIComponent(Dashbord));
    // console.log(formData, "dashobrd");

    const [searchParams] = useSearchParams();
    const fname = searchParams.get("fname");
    const lname = searchParams.get("lname");
    const email = searchParams.get("email");
    const gender = searchParams.get("gender");
    const password = searchParams.get("password");
    const confirmpassword = searchParams.get("confirmpassword");
    const age = searchParams.get("age");
    const role = searchParams.get("role");
    const interest = searchParams.get("interest");

    // const location = useLocation();
    // const receivedData = location.state;
    // console.log(receivedData,'recievData');


    return (
        <div className="dashboard-card">
            <h2>Dashboard</h2>
            <div className="dashboard-info">
                <p>
                    <strong>First Name:</strong> {fname}
                </p>
                <p>
                    <strong>Last Name:</strong> {lname}
                </p>
                <p>
                    <strong>Email Address:</strong> {email}
                </p>
                <p>
                    <strong>Gender:</strong> {gender}
                </p>
                <p>
                    <strong>Password:</strong> {password}
                </p>
                <p>
                    <strong>Confirm Password:</strong> {confirmpassword}
                </p>
                <p>
                    <strong>Age:</strong> {age}
                </p>
                <p>
                    <strong>Role:</strong> {role}
                </p>
                <p>
                    <strong>Interest:</strong> {interest}
                </p>
            </div>
        </div>
    );
};

export default Dashbord;
