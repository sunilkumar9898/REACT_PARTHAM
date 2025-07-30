import React from 'react'
import { useUser } from '../context/userContext/UserProvider'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const{user} = useUser()
  return (
    <div>
          {user?.name ? <Outlet /> : <Navigate to={"/"} replace />}
    </div>
  )
}

export default Protected
