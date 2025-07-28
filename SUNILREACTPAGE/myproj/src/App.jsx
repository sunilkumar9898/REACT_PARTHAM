
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import User from './pages/User'
import UserForm from './pages/UserForm'

function App() {


  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/post"} element={<Post />} />
                  <Route path={"/user"} element={<User />} />
                  <Route path={"/form"} element={<UserForm />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App
