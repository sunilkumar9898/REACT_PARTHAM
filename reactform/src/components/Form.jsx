import React, { useState } from "react";
import Card from "./Card";

const INTIAL_VALUE = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
};
const Form = () => {
    const [formData, setFormData] = useState(INTIAL_VALUE);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});
    const handleChnageValue = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        let newError = {};
        if (!formData?.firstName.trim()) newError.firstName = "Plese enter First Name";
        if (!formData?.lastName.trim()) newError.lastName = "Plese enter Last Name";
        if (!formData?.email.trim()) newError.email = "Plese enter Email Address";
        if (!formData?.age) newError.age = "Plese enter Age";
      if (!formData?.password.trim()) newError.password = "Plese enter Password";
      return newError
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let newArrValidate = validate();
        if (Object?.keys(newArrValidate)?.length > 0) {
            setError(newArrValidate);
        } else {
            setData([...data, formData]);
            setFormData(INTIAL_VALUE);
            setError({});
        }
    };

    return (
        <div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChnageValue}
                            placeholder="Plese enter first name"
                        />
                        {error?.firstName && (
                            <span style={{ color: "red" }}>
                                {error?.firstName}
                            </span>
                        )}

                        <label htmlFor="lastName">last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChnageValue}
                            placeholder="Plese enter last name"
                        />
                        {error?.lastName && (
                            <span style={{ color: "red" }}>
                                {error?.lastName}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">emil </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChnageValue}
                            placeholder="Plese enter email address"
                        />
                        {error?.email && (
                            <span style={{ color: "red" }}>{error?.email}</span>
                        )}

                        <label htmlFor="age">age </label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChnageValue}
                            placeholder="Plese enter age"
                        />
                        {error?.age && (
                            <span style={{ color: "red" }}>{error?.age}</span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">password </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChnageValue}
                            placeholder="Plese enter password"
                        />
                        {error?.password && (
                            <span style={{ color: "red" }}>
                                {error?.password}
                            </span>
                        )}
                    </div>

                    <button type="submit">submit</button>
                </form>
            </div>

            <div className="card">
                {data.map((item, index) => {
                    return <Card key={index} item={item} />;
                })}
            </div>
        </div>
    );
};

export default Form;
