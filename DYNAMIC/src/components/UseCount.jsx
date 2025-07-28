import React from 'react'
import { useCounter } from '../customHooks/useCounter'

const UseCount = () => {
    const {count, increase ,decrease , increaseBYFive, decreaseByFive} = useCounter(5)
  return (
    <div>
          <h1>count : {count}</h1>
          <button onClick={increase}>increse</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={increaseBYFive}>increaseBYFive</button>
          <button onClick={decreaseByFive}>decreaseByFive</button>
    </div>
  )
}

export default UseCount
