import React from 'react'

const DynamicInput = (props) => {
    const { label, onChange, value, name } = props;
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input className='mx-5 border-1 p-0.5 m-0.5' type="text" value={value} onChange={onChange} name={name} />
        </div>
    );
};

export default DynamicInput;
