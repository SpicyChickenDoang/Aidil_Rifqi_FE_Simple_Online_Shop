import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalogs from './components/Catalogs.jsx'

function App() {

  return (
    <>
      <Header />
      <Catalogs />
      {/* <Footer /> */}
    </>
  )
}

export default App
