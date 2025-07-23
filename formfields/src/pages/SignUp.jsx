import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        password: "",
        consfirmPassword: "",
        age: "",
        role: "",
        interest: [],
    });

    // const [data, setData] = useState([]);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const handleCheckBoxValue = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setformData({
                ...formData,
                interest: [...formData.interest, value],
            });
        } else {
            const filterArr = formData.interest.filter(
                (item) => item !== value
            );
            setformData({
                ...formData,
                interest: filterArr,
            });
        }
    };

    const validate = () => {
        let newError = {};
        if (!formData.fname) newError.fname = "Please enter first Name";
        if (!formData.lname) newError.lname = "Please enter last Name";
        if (!formData.email) newError.email = "Please enter email Name";
        if (!formData.gender) newError.gender = "Please select gender ";
        if (!formData.password) newError.password = "Please enter password ";
        if (formData.password !== formData.consfirmPassword)
            newError.consfirmPassword = "Please enter match password";
        if (!formData.age) newError.age = "Please enter age ";
        if (!formData.role) newError.role = "Please enter Role ";

        if (formData.interest.length === 0)
            newError.interest = "Please select interset";
        return newError;
    };

  const handleSubmit = (e) => {
        // const query = new URLSearchParams(formData).toString();
        e.preventDefault();
        let newArrValidate = validate();
        if (Object?.keys(newArrValidate)?.length > 0) {
            setError(newArrValidate);
        } else {
            // setData([...data, formData]);
            setError({});
          navigate(`/Dashbord?fname=${formData.fname}&lname=${formData.lname}&email=${formData.email}&gender=${formData.gender}&password=${formData.password}&confirmpassword=${formData.consfirmPassword}&age=${formData.age}&role=${formData.role}&interest=${formData.interest}`);
                    // navigate(
                    //     `/Dashbord?${query}`
            // );

            // navigate(`/Dashbord`, {state:formData})
        }
    };

    return (
        <div>
            <div style={{ margin: "20px" }}>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-group">
                        <label>
                            First Name
                            <input
                                type="text"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                            />
                            {error?.fname && (
                                <span className="error">{error.fname}</span>
                            )}
                        </label>
                        <label>
                            Last Name
                            <input
                                type="text"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                            />
                            {error?.lname && (
                                <span className="error">{error.lname}</span>
                            )}
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {error?.email && (
                                <span className="error">{error.email}</span>
                            )}
                        </label>
                        <label>
                            Gender
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {error?.gender && (
                                <span className="error">{error.gender}</span>
                            )}
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {error?.password && (
                                <span className="error">{error.password}</span>
                            )}
                        </label>
                        <label>
                            Confirm Password
                            <input
                                type="password"
                                name="consfirmPassword"
                                value={formData.consfirmPassword}
                                onChange={handleChange}
                            />
                            {error?.consfirmPassword && (
                                <span className="error">
                                    {error.consfirmPassword}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Age
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                            {error?.age && (
                                <span className="error">{error.age}</span>
                            )}
                        </label>
                        <label>
                            Role
                            <div>
                                <input
                                    type="radio"
                                    name="role"
                                    value="Admin"
                                    onChange={handleChange}
                                />{" "}
                                Admin
                                <input
                                    type="radio"
                                    name="role"
                                    value="Manager"
                                    onChange={handleChange}
                                />{" "}
                                Manager
                                <input
                                    type="radio"
                                    name="role"
                                    value="Viewer"
                                    onChange={handleChange}
                                />{" "}
                                Viewer
                            </div>
                            {error?.role && (
                                <span className="error">{error.role}</span>
                            )}
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Interest:
                            <div className="check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="interest"
                                        value="Cricket"
                                        onChange={handleCheckBoxValue}
                                    />
                                    Cricket
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="interest"
                                        value="Music"
                                        onChange={handleCheckBoxValue}
                                    />
                                    Music
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="interest"
                                        value="Reading"
                                        onChange={handleCheckBoxValue}
                                    />
                                    Reading
                                </label>
                            </div>
                            {error?.interest && (
                                <span className="error">{error.interest}</span>
                            )}
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
