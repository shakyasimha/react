import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './styles/Card.css'
//import BusinessCard from './components/Card.jsx'

function BusinessCard(props) {
  return (
    <div className='cardbox'>
      <div className='cardbox--nameholder'>
        {props.name}
      </div>
      
      <div className='cardbox--designation'>
        {props.designation}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <BusinessCard
        name="Sushovan Shakya"
        designation="Electronics Engineer"
      />
    </>
  )
}

export default App
