

import { useState } from 'react'
import './App.css'
import DynamicSelect from './components/DynamicSelect'
import DynamicRadio from './components/DynamicRadio'
import DynamicInput from './components/DynamicInput'
import DynamicCheckBox from './components/DynamicCheckBox'
import Wrapper from './components/ChildrenProp/Wrapper'
import Axios from './components/Axios'
import UseCount from './components/UseCount'

const INTIAL_SUBJECT_LIST = ["MATH","HINDI","ENGLISH" ,"SCIENCE" ,"SOCIAL"]
const INTIAL_HOBBIES_LIST = ["GYM","FOTBALL","VIDEOGAME" ,"MUSIC" ,"DANCE"]
const INTIAL_ROLE_LIST = ["ADMIN","MANAGER","HR" ,]
const INTIAL_GENDER_LIST = ["MALE","FEMALE","OTHER" ,]
const INTIAL_INTERSET_LIST = ["MUSIC", "DANCING", "SINGING"];

const INTIAL_VALUE = {
    firtsName: "Sunil",
    lastName: "",
    subject: "",
    hobby: "",
    role: "",
    gender: "",
    interest :"",
};

function App () {
  const [subject, setSubject] = useState(INTIAL_SUBJECT_LIST);
  const [hobby, setHobby] = useState(INTIAL_HOBBIES_LIST);
  const [role, setRole] = useState(INTIAL_ROLE_LIST);
  const [gender, setGender] = useState(INTIAL_GENDER_LIST);
  const [interest, setInterest] = useState(INTIAL_INTERSET_LIST);
  const[data , setData] = useState([])
  const [formData, setFormData] = useState(INTIAL_VALUE);

console.log(formData,'formData');
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData])
    setFormData(INTIAL_VALUE)
}
console.log(data, 'data');

  return (
      <>
          {/* <Wrapper>
              <>
                  <DynamicInput
                      currentValue={formData.firtsName}
                      lable={"First Name"}
                      setData={(updateName) =>
                          setFormData({ ...formData, firtsName: updateName })
                      }
                  />

                  <DynamicInput
                      lable={"Last Name"}
                      setData={(updateName) =>
                          setFormData({ ...formData, lastName: updateName })
                      }
                  />
                  <DynamicSelect
                      lable={"Subject"}
                      options={subject}
                      setData={(updateSubject) =>
                          setFormData({ ...formData, subject: updateSubject })
                      }
                  />
                  <DynamicSelect
                      lable={"Hobby"}
                      options={hobby}
                      setData={(updateHobby) =>
                          setFormData({ ...formData, hobby: updateHobby })
                      }
                  />

                  <DynamicRadio
                      lable={"Role"}
                      options={role}
                      name={"role"}
                      setData={(updatedRole) =>
                          setFormData({ ...formData, role: updatedRole })
                      }
                  />
                  <DynamicRadio
                      lable={"Gender"}
                      options={gender}
                      name={"gender"}
                      setData={(updatedGender) =>
                          setFormData({ ...formData, gender: updatedGender })
                      }
                  />

                  <DynamicCheckBox
                      lable={"interest"}
                      options={interest}
                      setData={(updateInterest) =>
                          setFormData({ ...formData, interest: updateInterest })
                      }
                  />

                  <button onClick={handleSubmit}>Submit</button>
              </>
          </Wrapper> */}

          {/* <Axios/> */}
          <UseCount/>
      </>
  );
}

export default App
