import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/Card.jsx'

function App() {
  return (
    <>
      <BusinessCard
        person = {{
          name: "Sushovan Shakya",
          designation: "Electronics Engineer"
        }}
      />
    </>
  )
}

export default App
