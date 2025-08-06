
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/action';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>Redux (without toolkit)</h1>
      <h3>count : {count}</h3>
      <button onClick={()=>dispatch(increment())}> Increment</button>
      <button onClick={()=>dispatch(decrement())}> Decrement</button>
    </>
  )
}

export default App
