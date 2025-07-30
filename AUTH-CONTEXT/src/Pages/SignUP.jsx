import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserList } from '../Context/UserListProvider';
const INTIAL_FORM_VALUE = {
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword:""
}
const SignUP = () => {
    const navigate  = useNavigate()
  const {setUserList } = useUserList();
    const [formData, setFormData] = useState(INTIAL_FORM_VALUE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserList((prev) => [...prev, formData]);
        setFormData(INTIAL_FORM_VALUE)
        navigate('/login')
    }
  return (
      <div>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">first Name</label>
              <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={formData?.fname}
                  onChange={handleChange}
              />
              <label htmlFor="">last Name</label>
              <input
                  type="text"
                  placeholder="last Name"
                  name="lname"
                  value={formData?.lname}
                  onChange={handleChange}
              />
              <label>Gender:</label>
              <label>
                  <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                  />
                  Male
              </label>
              <label>
                  <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                  />
                  Female
              </label>
              <label>
                  <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleChange}
                  />
                  Other
              </label>
<br />
              <label htmlFor="">email</label>
              <input
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
              />
              <label htmlFor="">password</label>
              <input
                  type="number"
                  name="password"
                  value={formData?.password}
                  onChange={handleChange}
              />
              <label htmlFor="">Confirm password</label>
              <input
                  type="number"
                  name="confirmPassword"
                  value={formData?.confirmPassword}
                  onChange={handleChange}
              />
              <button type='submit'>Submit</button>
          </form>
      </div>
  );
}

export default SignUP
