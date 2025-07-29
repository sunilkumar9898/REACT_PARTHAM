import React from 'react'
import { useCounter } from '../customHooks/useCounter'
import { useUser } from '../context/UserContext'

const UseCount = () => {
  const { count, increase, decrease, increaseBYFive, decreaseByFive } = useCounter(5)
  const { user, setUser } = useUser();
  console.log(user,user);

  return (
      <div>
          <h1>User Name:{user?.name}</h1><br />
          <h1>count : {count}</h1>
          <button onClick={increase}>increse</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={increaseBYFive}>increaseBYFive</button>
          <button onClick={decreaseByFive}>decreaseByFive</button>
<br /><br /><br />
          <button onClick={() => setUser({ name: "Sumit" })}>
              set User Name BY Context API
          </button>
      </div>
  );
}

export default UseCount
