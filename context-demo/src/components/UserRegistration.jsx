import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/userContext/UserProvider'
import { useNavigate } from 'react-router-dom'
const INTIAL_FORM_VALUE = {
  name: "",
  email:"",
}
const UserRegistration = () => {
  const navigate = useNavigate()
  const { setUser } = useUser();
  const [formData, setFormData] = useState(INTIAL_FORM_VALUE)

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,[name]:value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({...formData})
    setFormData(INTIAL_FORM_VALUE)
    navigate('/dashboard')
  }
  return (
      <div>
          <form action="" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="">name</label>
                  <input
                      type="text"
                      name="name"
                      value={formData?.name}
                      onChange={handleChnage}
                  />
              </div>
              <div>
                  <label htmlFor="">email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleChnage}
                  />
              </div>

              <button type="submit">Submit</button>
          </form>
      </div>
  );
}

export default UserRegistration
