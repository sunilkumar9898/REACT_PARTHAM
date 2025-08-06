import React, { useState } from 'react'
import MyComponent from './MyComponent';



const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Sunil");

  return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
          <h1>React.memo Example</h1>
          <button onClick={() => setCount(count + 1)}>Increase Count</button>
          <p>Count : {count}</p>

          <button onClick={() => setName("John")}>Change Name</button>

          <MyComponent name={name} />
      </div>
  );
}

export default Home
