import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserProvider from './contexts/UserContext.jsx'
import CardsProvider from './contexts/CardsContext.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CardsProvider>
          <App />
        </CardsProvider>        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
