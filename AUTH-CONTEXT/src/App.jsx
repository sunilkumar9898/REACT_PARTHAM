
import './App.css'
import AppRoutes from './Layout/AppRoutes'
import { Toaster } from "react-hot-toast";
function App() {

  return (
      <div>
          <Toaster
              position="top-right "
              toastOptions={{
                  style: {
                      marginTop: "70px",
                  },
                  success: {
                      style: {
                          background: "#d1fae5",
                          color: "#065f46",
                          border: "1px solid #34d399",
                      },
                  },
                  error: {
                      style: {
                          background: "#fee2e2",
                          color: "#b91c1c",
                          border: "1px solid #f87171",
                      },
                  },
              }}
              reverseOrder={false}
          />
          <AppRoutes />
      </div>
  );
}

export default App
