import React, { useState } from 'react'

const DynamicSelect = (props) => {
    const { lable, setData, options } = props;
    const [selectedValue, setSelectedValue] = useState("");

    const handleChnage = (e) => {
        const { value } = e.target;
        setSelectedValue(value)
        setData(value)
    }

console.log(selectedValue,'seleltded vlue');


  return (
      <div>
          <label htmlFor="">{lable}</label>
          <select name="" id="" value={selectedValue} onChange={handleChnage}>
              <option value="">Select</option>
              {options.map((item) => (
                  <option key={item} value={item.toLowerCase()}>{item}</option>
              ))}
          </select>
      </div>
  );
}

export default DynamicSelect
