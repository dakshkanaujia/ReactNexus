import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Attendees from './Components/Attendees/Attendees'
import Search from './Components/Search/Search.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='text-7xl honk-heading  mb-11'> React Nexus </h1>
        <Search/>
      </div>
    </>
  )
}

export default App
