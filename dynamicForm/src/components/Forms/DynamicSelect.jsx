import React from 'react'



const DynamicSelect = (props) => {
  const { name, label, value, onChange , hobby  } = props;
  return (
      <div>
          <label htmlFor="">{label}</label>
          <select name={name} id="" value={value} onChange={onChange} >
              <option value="">Select----</option>
              {hobby.map((hobby) => (
                  <option key={hobby} value={hobby.toLocaleLowerCase()}>
                      {hobby}
                  </option>
              ))}
          </select>
      </div>
  );
}

export default DynamicSelect
