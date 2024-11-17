import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Teste from './components/Teste'
import Fernanda from './components/Fernanda'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/fernanda" element={<Fernanda />} />
          <Route exact path="/teste" element={<Teste />} />
          <Route exact path="/" element={<Home />} /> 
          {/* inicia o home ao adicionar uma barra */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



// npm i react-router-dom
// dps importa pipipopop