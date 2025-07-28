import { Link } from "react-router-dom";


const Navbar = () => {



  return (
      <>
          <nav>
              <ul class="grid grid-cols-4 gap-4 bg-blue-600 p-2.5 text-amber-100 font-bold font-sans">
                  <li>
                      <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                      <Link to={"/post"}>post</Link>
                  </li>
                  <li>
                      <Link to={"/user"}>user</Link>
                  </li>
                  <li>
                      <Link to={"/form"}>form</Link>
                  </li>
              </ul>
          </nav>
      </>
  );
}

export default Navbar
