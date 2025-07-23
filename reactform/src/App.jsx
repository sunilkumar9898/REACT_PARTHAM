import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Card from "./components/Card";
import Index from "./components/Forms/Index";


function App() {
    return (
        <BrowserRouter>
            <Home />
            <Index/>
            <Routes>
                {/* <Route path="/" element={<Form />} /> */}
                {/* <Route path="/card" element={<Card />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
