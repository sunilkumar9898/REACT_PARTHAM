import './App.css'
import AppRouter from "./Layout/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {


    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    );
}

export default App;







