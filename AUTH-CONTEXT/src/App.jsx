
import './App.css'
import AppRoutes from './Layout/AppRoutes'
import { Toaster } from "react-hot-toast";
function App() {

  return (
      <>
          <Toaster
              position="top-right"
              reverseOrder={false} />
          <AppRoutes />
      </>
  );
}

export default App
