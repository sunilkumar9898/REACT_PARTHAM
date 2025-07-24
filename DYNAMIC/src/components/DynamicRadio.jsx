import React, { useState } from 'react'

const DynamicRadio = (props) => {
        const { lable, setData, options ,name } = props;
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
          {options.map((item) =>
          {

              return (
                  <div key={item}>
                      <input
                          name={name}
                          type="radio"
                          value={item.toLowerCase()}
                          onChange={handleChnage}
                          checked={selectedValue === item.toLowerCase()}
                      />
                      {item}
                  </div>
              );
             }
          )}
    </div>
  )
}

export default DynamicRadio
