import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './stories/Button'
import Card from './stories/Card'
function App() {
  

  return (
    <>
    
      <Card img='https://as2.ftcdn.net/jpg/07/08/47/75/1000_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg' 
       title='Card Title' description='Card Description'/>
    
    </>
  )
}

export default App
