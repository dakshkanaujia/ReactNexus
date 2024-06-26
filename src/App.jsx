import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Attendees from './Components/Attendees/Attendees'
import Search from './Components/MainContainer/MainContainer.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <Search/>
      </div>
    </>
  )
}

export default App
