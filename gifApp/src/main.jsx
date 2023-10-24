import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifApp } from "./gifApp.jsx";
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>,
)
