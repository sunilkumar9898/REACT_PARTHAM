import React, { useState } from 'react'
import DynamicSelect from './Forms/DynamicSelect'
import DynamicRadio from './Forms/DynamicRadio';
import DynamicInput from './Forms/DynamicInput';
import DynamicCheckBox from './Forms/DynamicCheckBox';
const INTIAL_VALUE = {
    firstName: "",
    lastName: "",
    role: "",
    gender: "",
    hobbies: "",
    subject: "",
    course:[]
};

const HOBBIES = ["Swiming", "Running", "Cooking", "Singing", "Dancing"];
const SUBJECT = ["BCA", "MCA", "PGDCA", "MBA", "BBA"];
const ROLE = [
  "ADMIN",
  "MANAGER",
  "HR"
]
const GENDER = ["MALE", "FEMALE", "OTHER"];
const COURSE = ['MCA' ,'BCA' ,"DCA"]
const Form = () => {
  const [formData, setFormData] = useState(INTIAL_VALUE);
  const [data, setData] = useState([])
  const [error , setError] = useState("")

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({

      ...prev , [name]:value
    }))
}

  const validate = () => {
    let newArr = {};
    if (!formData?.firstName) newArr.firstName = "Please enter First Name";
    if (!formData?.lastName) newArr.lastName = "Please enter lastName Name";
    if (!formData?.role) newArr.role = "Please select role";
    if (!formData?.gender) newArr.gender = "Please select gender";
    if (!formData?.hobbies) newArr.hobbies = "Please select hobby";
    if (!formData?.subject) newArr.subject = "Please select subjetc";
    return newArr
}
  const handleSubmit = (e) => {
    e.preventDefault()
    let newArrError = validate();
    if (Object.keys(newArrError).length > 0) {
      setError(newArrError)
    } else {
      setData((prev) => [...prev, formData]);
      setFormData(INTIAL_VALUE);
      setError("");
    }

  }
console.log(data);

      // const handleCheckBoxValue = (e) => {
      //     const { value, checked } = e.target;
      //     if (checked) {
      //         setFormData({
      //             ...formData,
      //             course: [...formData.course, value],
      //         });
      //     } else {
      //         const filterArr = formData.course.filter(
      //             (item) => item !== value
      //         );
      //         setFormData({
      //             ...formData,
      //             course: filterArr,
      //         });
      //     }
      // };


  return (
      <div>
          <div>
              <form
                  action=""
                  onSubmit={handleSubmit}
                  className="form-container">
                  <div className="input-section">
                      <DynamicInput
                          label={"First Name"}
                          name={"firstName"}
                          value={formData.firstName}
                          onChange={handleValueChange}
                      />

                      <DynamicInput
                          label={"Last Name"}
                          name={"lastName"}
                          value={formData.lastName}
                          onChange={handleValueChange}
                      />
                  </div>
                  <div style={{ display: "flex", gap: "280px" }}>
                      {error.firstName && (
                          <p style={{ color: "red" }}>{error.firstName}</p>
                      )}
                      {error.lastName && (
                          <p style={{ color: "red" }}>{error.lastName}</p>
                      )}
                  </div>

                  <div className="input-section">
                      <DynamicRadio
                          label={"Role"}
                          name={"role"}
                          radio={ROLE}
                          value={formData.role}
                          onChange={handleValueChange}
                      />
                      <DynamicRadio
                          label={"Gender"}
                          radio={GENDER}
                          name={"gender"}
                          value={formData.gender}
                          onChange={handleValueChange}
                      />
                  </div>
                  <div style={{ display: "flex", gap: "280px" }}>
                      {error.role && (
                          <p style={{ color: "red" }}>{error.role}</p>
                      )}
                      {error.gender && (
                          <p style={{ color: "red" }}>{error.gender}</p>
                      )}
                  </div>
                  <div className="input-section">
                      <DynamicSelect
                          label={"Hobbies"}
                          name={"hobbies"}
                          hobby={HOBBIES}
                          value={formData.hobbies}
                          onChange={handleValueChange}
                      />
                      <DynamicSelect
                          label={"subject"}
                          name={"subject"}
                          hobby={SUBJECT}
                          value={formData.subject}
                          onChange={handleValueChange}
                      />
                  </div>
                  <div style={{ display: "flex", gap: "280px" }}>
                      {error.hobbies && (
                          <p style={{ color: "red" }}>{error.hobbies}</p>
                      )}
                      {error.subject && (
                          <p style={{ color: "red" }}>{error.subject}</p>
                      )}
                  </div>

                  <div>
                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
      </div>
  );
}





export default Form
