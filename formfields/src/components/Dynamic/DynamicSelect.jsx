import React, { useState } from 'react'
const HOBBIES = [
  'Cricket',
  'Football',
  'Tennis',
  'Swiming',
  'Dancing'
]
const DynamicSelect = (props) => {
const{setHobby} = props
  const [selectedValue , setSelectedValue] = useState('')
  const handleSelect = (e) => {
    const { value } = e.target;
    setSelectedValue(value)
    setHobby(value)
}

  console.log(selectedValue,'seleted');

  return (
    <div>
      <select value={selectedValue} onChange={handleSelect} name="dynamic-select">
        <option value="">select Hobby</option>
        {HOBBIES.map((hobby) => (
          <option key={hobby} value={hobby.toLowerCase()}>{hobby}</option>
        ))}
</select>
    </div>
  )
}

export default DynamicSelect

