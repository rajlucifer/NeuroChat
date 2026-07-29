import { useState } from 'react'
import bgImg from "../src/assets/bgImage.svg"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  

  return (
    <>
      <div className="w-full h-screen bg-cover bg-center " style={{backgroundImage:`url(${bgImg})`}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
         
      </div>

    </>
  )
}

export default App
