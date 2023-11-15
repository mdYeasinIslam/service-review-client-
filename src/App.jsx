import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-photo-view/dist/react-photo-view.css';
import Root from './Router/Root'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>
        <Root/>
        <ToastContainer/>
    </div>
  )
}

export default App
