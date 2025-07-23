import React, { useEffect, useState } from 'react'

const Mount = () => {
    const [count , setCount] = useState(0)
    const [value, setValue] = useState(1)

    useEffect(() => {
    console.log("mounting");

    }, [])

    useEffect(() => {
        // if (count >= 5) {
        //     setValue(55)
        // } else if (count <5) {
        //     setValue(5)
        // }
        setValue(count > 5 ? 55 : 5);
    }, [count]);

    useEffect(() => {
        console.log("value"  , value);
    }, [value]);


    useEffect(() => {
        console.log("without Dep array");
    });

  return (
      <div>
          <h1>COUNT : {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase Count</button>
          <button onClick={() => setCount(count - 1)}>Decraese Count</button>
          <h2>value : {value}</h2>
          <button onClick={() => setValue(value + 1)}>Increase Vlaue</button>
      </div>
  );
}

export default Mount
