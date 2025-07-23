import React, { useState } from 'react'

const Index = () => {
    const [formData, setFormData] = useState({
        description: "",
        gender: "",
        shift: "",
        hobbies: []
    })

    const handleFiledChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev , [name]:value
        }))
    }


        const handleCheckboxValue = (e) => {
            const { value, checked } = e.target;
            if (checked) {
            setFormData({...formData , hobbies:[...formData.hobbies , value]})
            } else {
                const filterArr = formData.hobbies.filter((item) => item !== value);
                setFormData({...formData ,hobbies:filterArr})
           }
        };


    console.log(formData,'formData');

  return (
      <div>
          <div>
              <label htmlFor="">textArea</label>
              <textarea
                  name="description"
                  id="description"
                  value={formData?.description}
                  onChange={handleFiledChange}></textarea>
          </div>
          <div>
              <label htmlFor="gender">Gender</label>
              <select
                  name="gender"
                  id=""
                  value={formData.gender}
                  onChange={handleFiledChange}>
                  <option value="">Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
              </select>
          </div>

          <div>
              <label htmlFor="">
                  <input
                      type="radio"
                      name="shift"
                      value="morning"
                      onChange={handleFiledChange}
                  />
                  morning
              </label>
              <label htmlFor="">
                  <input
                      type="radio"
                      name="shift"
                      value="Evening"
                      onChange={handleFiledChange}
                  />
                  evening
              </label>
              <label htmlFor="">
                  <input
                      type="radio"
                      name="shift"
                      value="Noon"
                      onChange={handleFiledChange}
                  />
                  noon
              </label>
          </div>

          <div>
              <label htmlFor="">Hobbies</label>

              <label htmlFor="">
                  <input
                      type="checkbox"
                      value="music"
                      checked={formData.hobbies.includes("music")}
                      onChange={handleCheckboxValue}
                  />
                  MUSIC
              </label>
              <label htmlFor="">
                  <input
                      type="checkbox"
                      value="gym"
                      checked={formData.hobbies.includes("gym")}
                      onChange={handleCheckboxValue}
                  />
                  GYM
              </label>
              <label htmlFor="">
                  <input
                      type="checkbox"
                      value="dance"
                      checked={formData.hobbies.includes("dance")}
                      onChange={handleCheckboxValue}
                  />
                  DANCE
              </label>
          </div>
      </div>
  );
}

export default Index
