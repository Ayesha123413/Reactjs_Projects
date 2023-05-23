import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './Components/SignUp/Signup'
import Login from './Components/Login/Login'
import MainPage from './Components/Mainpage/mainPage'
import Dashboard from './Components/Dashboard/Dashboard'
import Dashboardpage from './Components/pages/Dashboardpage'
import Sidebar from './Components/Dashboard/Sidebar'
import BrowseHost from './Components/pages/BrowseHost'

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      {/* <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/logIn" element={<Login />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route exact path="/maindashboard" element={<Dashboard />} />
      </Routes> */}
    </div>
  )
}

export default App
