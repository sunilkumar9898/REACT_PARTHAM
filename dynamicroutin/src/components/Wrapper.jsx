import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'

const Wrapper = () => {
    const[isAuth , setIsAuth] = useState(true)
  return (
    <div>
          <h1>User Wrapper</h1>
          {isAuth ? <Outlet/> : "THis IS  no authenticate user"}
    </div>
  )
}

export default Wrapper
