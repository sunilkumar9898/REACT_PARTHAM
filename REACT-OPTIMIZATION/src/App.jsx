
import React,{  Suspense } from 'react';
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Timer from './pages/refExample2';
import PreviousValue from './pages/refExample3';
import SmartForm from './pages/combineExample';
import UseFetchAPI from './pages/useFetchAPI';




const User = React.lazy(() => import('./pages/User'))
const UseReducer = React.lazy(() => import("./pages/UseReducer"));

function App() {


  return (
      <>
          {/* <Home/> */}
          {/* <About/> */}

          <h1>React Lazy Loading Example</h1>
          {/* <Suspense fallback={<div>Loading Home...</div>}>
              <User />
          </Suspense> */}

          {/* <Suspense fallback={<div>Loading Home...</div>}>
              <UseReducer />
          </Suspense> */}
          {/* <Timer/> */}
          {/* <PreviousValue/> */}
          {/* <SmartForm/> */}
            <UseFetchAPI/>
      </>
  );
}

export default App
