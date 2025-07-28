import React from 'react'

const DynamicRadio = (props) => {
    const { name, label,value,  options, onChange } = props;
  return (
    <div>
          <label htmlFor="">{label}</label>
          {options.map((item) => (
                <label key={item} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name={name}
                            value={item.toLowerCase()}
                            checked={value === item.toLowerCase()}
                            onChange={onChange}
                        />{" "}
                        {item}
                    </label>
          ))}
    </div>
  )
}

export default DynamicRadio;




