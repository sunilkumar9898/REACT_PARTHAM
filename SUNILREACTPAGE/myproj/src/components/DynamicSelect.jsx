import React from "react";

const DynamicSelect = (props) => {
    const { label, name, value, onChange, options } = props;

    return (
        <div>
            <label>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DynamicSelect;
