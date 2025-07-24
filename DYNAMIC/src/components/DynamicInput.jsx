import React, { useState } from 'react'

const DynamicInput = (props) => {
        const { lable, setData, currentValue } = props;
        const [selectedValue, setSelectedValue] = useState(currentValue);

        const handleChnage = (e) => {
            const { value } = e.target;
            setSelectedValue(value)
            setData(value)
        }

    console.log(selectedValue,'seleltded vlue');


  return (
    <div>
          <label htmlFor="">{lable}</label>
          <input type="text" value={selectedValue} onChange={handleChnage} />
    </div>
  )
}

export default DynamicInput
