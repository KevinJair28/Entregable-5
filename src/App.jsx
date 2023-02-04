import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={< PokedexId />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
