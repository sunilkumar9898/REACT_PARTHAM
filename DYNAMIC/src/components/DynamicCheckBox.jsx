import React, { useState } from 'react'

const DynamicCheckBox = (props) => {
    const { lable, setData, options } = props;
    const [selectValue , setSeletedValue] = useState([])
    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSeletedValue([...selectValue, value])
            setData([...selectValue, value]);
        } else {
            const filterArr = selectValue.filter((item) => item !== value);
            setSeletedValue(filterArr);
            setData(filterArr)
        }
    }

    console.log(selectValue,'selectValue');

  return (
      <div>
          <label htmlFor="">{lable}</label>
          {options.map((item) => {
              return (
                  <div key={item}>
                      <input
                          type="checkbox"
                          value={item.toLowerCase()}
                          onChange={handleChange}
                          checked={selectValue.includes(item.toLowerCase())}
                      />
                      {item}
                  </div>
              );
          })}

      </div>
  );
}

export default DynamicCheckBox
