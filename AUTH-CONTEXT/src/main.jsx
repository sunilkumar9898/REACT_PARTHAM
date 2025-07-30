import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserLoginProvider from './Context/LoginUserProvider.jsx'
import PostProvider from './Context/PostProvider.jsx'
import UserListProvider from './Context/UserListProvider.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PostProvider>
            <UserLoginProvider>
                <UserListProvider>
                    <App />
                </UserListProvider>
            </UserLoginProvider>
        </PostProvider>
    </StrictMode>
);
