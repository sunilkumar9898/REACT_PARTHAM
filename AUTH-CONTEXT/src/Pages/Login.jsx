import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserList } from "../Context/UserListProvider";
import { useLogin } from "../Context/LoginUserProvider";

const INTIAL_FORM_VALUE = {
    email: "",
    password: "",
};

const Login = () => {
    const { userList } = useUserList()
    const { setUserLogin } = useLogin();


  const navigate = useNavigate()

    const [formData, setFormData] = useState(INTIAL_FORM_VALUE);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const matchedUser = userList.find(
            (user) =>
                user.email === formData.email &&
                user.password === formData.password
        );

        if (matchedUser) {
          setMessage("✅ Login successful!");
         setUserLogin(matchedUser);
          navigate("/post");
        } else {
          setMessage(
              <span>
                  User not found or wrong credentials. Please
                  <button
                      onClick={() => navigate("/signup")}
                      style={{
                          color: "blue",
                          textDecoration: "underline",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                      }}>
                      Sign Up
                  </button>
              </span>
          );
        }

        setFormData(INTIAL_FORM_VALUE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
