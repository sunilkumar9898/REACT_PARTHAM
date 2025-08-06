import React from 'react'
import { useLogin } from '../Context/LoginUserProvider'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const { userLogin } = useLogin();
  console.log(userLogin, "loginuser");

  return (
      <div>
          <div>
              {userLogin?.fname ? <Outlet /> : <Navigate to={"/"} replace />}
          </div>
      </div>
  );
}

export default Protected;
