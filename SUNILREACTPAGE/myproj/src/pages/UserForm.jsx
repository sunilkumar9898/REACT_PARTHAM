import React from "react";
import DynamicSelect from "../components/DynamicSelect";
import { UseForm } from "../customHooks/useform";
import DynamicInput from "../components/DynamicInput";
import DynamicRadio from "../components/DynamicRadio";

const INTIAL_VALUE_DISTRICT = ["JAIPUR", "SIKAR", "DAUSA", "TONK"];
const INTIAL_VALUE_GENDER = ["MALE", "FEMALE", "OTHERS"];

const UserForm = () => {
    const { value, handleChange ,handleSubmit } = UseForm();

    return (
        <div>
            <DynamicSelect
                label="DISTRICT"
                name="district"
                value={value?.district || ""}
                onChange={handleChange}
                options={INTIAL_VALUE_DISTRICT}
            />

            <DynamicInput
                label={"First Name"}
                name={"firstName"}
                value={value?.firstName}
                onChange={handleChange}
            />

            <DynamicInput
                label={"Last Name"}
                name={"lastName"}
                value={value?.lastName}
                onChange={handleChange}
            />

            <DynamicRadio
                label="GENDER"
                name="gender"
                value={value?.gender || ""}
                onChange={handleChange}
                options={INTIAL_VALUE_GENDER}
        />

        <button onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default UserForm;
