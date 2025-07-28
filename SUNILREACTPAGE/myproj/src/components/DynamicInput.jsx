import React from 'react'

const DynamicInput = (props) => {
    const { label, onChange, value, name } = props;
  return (
      <div>
          <label htmlFor="">{label}</label>
          <input type="text" value={value} onChange={onChange} name={name} />
      </div>
  );
}

export default DynamicInput
