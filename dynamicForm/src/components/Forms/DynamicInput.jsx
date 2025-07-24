import React from 'react'

const DynamicInput = ({ label, name, value, onChange }) => {


    return (
        <div>
            <label htmlFor="">{label}</label>
            <div>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default DynamicInput
