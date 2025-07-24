import React from "react";

const DynamicRadio = (props) => {
    const { label, name, radio, onChange } = props;

    return (
        <div>
            <label htmlFor="">{label}</label>
            {radio.map((role) => (
                <div key={role}>
                    <input
                        type="radio"
                        name={name}
                        value={role}
                        onChange={onChange}
                    />
                    {role}
                </div>
            ))}
        </div>
    );
};

export default DynamicRadio;
