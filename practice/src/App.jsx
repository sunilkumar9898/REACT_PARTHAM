
// import {useState } from 'react'
import './App.css'
import Card from './components/Card'
import UserCard from './components/UserCard';
import Mount from './components/Mount';
import ComA from './components/ComA';
import ComB from './components/ComB';
import FetchData from './components/FetchData';

function App() {
// const [text, setText] = useState(
//     "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel."
// );
//   const [user, setUser] = useState({});
  // const [count, setCount] = useState(0)



//   const user1 = {
//     name: "Sunil",
//     age: "29",
//     gender:"male"
//   }
//     const user2 = {
//         name: "Manjeet",
//         age: "29",
//         gender: "male",
//     };
//       const user3 = {
//           name: "Ramu",
//           age: "29",
//           gender: "male",
//       };

//   const handleUser1 = () => {
//     setUser(user1)
//   }
//   const handleUser2 = () => {
//       setUser(user2);
//   };
//   const handleUser3 = () => {
//       setUser(user3);
//   };

  return (
    <>

      <FetchData/>
          {/* {count > 5 ? <ComB /> : <ComA />} */}
          {/* <Card text={text} setText={setText} />
           */}
          {/* <UserCard user={user} />
          <div className="user-btn">
              <button onClick={handleUser1}>User1</button>
              <button onClick={handleUser2}>User2</button>
              <button onClick={handleUser3}>User3</button>
      </div>
      <Mount/> */}
          {/* <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button> */}
      </>
  );
}

export default App
