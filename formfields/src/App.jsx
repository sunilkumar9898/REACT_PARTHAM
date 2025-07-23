
import './App.css'
import {BrowserRouter,Routes , Route , Link} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashbord from './pages/Dashbord'
import Home from './pages/Home'
import TransferOrder from './pages/Order'

function App() {


  return (
      <>
          <BrowserRouter>
              {/* <Home/> */}
              {/* <TransferOrder/> */}
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  {/* <Route path="/SignUp/:Dashbord" element={<Dashbord />} /> */}
                  <Route path="/Dashbord" element={<Dashbord />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App
