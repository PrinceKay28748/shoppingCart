import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Homepage from './components/homepage'

function App() {
  

  return (
    <>
     
      <div className="app">
         <Navbar />
         <main className='content'>
          <Homepage />
         </main>
         <Footer />
        

        
       </div>

        
    </>
  )
}

export default App
