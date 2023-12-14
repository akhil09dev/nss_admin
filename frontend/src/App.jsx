import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { createBrowserRouter,
  Routes,
  Route,
  BrowserRouter
  ,
 
   } from 'react-router-dom'
import VolunteerList from './components/VolunteerList'
  
   

function App() {

  return (
    <div className='w-full '>

    <BrowserRouter>

    
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/admin' element={<Admin />} />
      <Route path='admin/volunteers' element={<VolunteerList/>} />



      
      
    </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
