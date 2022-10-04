import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextCrudProvider } from "./Context/contextCrud";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextCrudProvider>
    <App />
    </ContextCrudProvider>
  </React.StrictMode>
)
