import React, { useState } from 'react'
import { Link, Navigate,  } from 'react-router-dom'
import ChildA from '../PropDrilling/ChildA';
import ChildB from '../PropDrilling/ChildB';
import DynamicSelect from '../components/Dynamic/DynamicSelect';

const Home = () => {
  // const navigate = useNavigate()
  // const[user , setUser] =useState({})
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    hobby:""
  })

  console.log(formData,'formData');
  
  const handleSubmit = () => {

  }
  return (
      <div>
          {/* <button >Login</button>
          <button onClick={() => navigate("/SignUp")}>Sign Up</button> */}
          {/* <ChildA heading={ "This is my prop from Home"} user={user} />
      <ChildB userDetails={user} setUser={setUser} /> */}

          <form action="" onSubmit={handleSubmit}>
              <input type="text" />
              <input type="radio" />
        <DynamicSelect setHobby={(updatedHobby) => setFormData({
          ...formData,hobby:updatedHobby
        })} />
          </form>
      </div>
  );
}

export default Home
