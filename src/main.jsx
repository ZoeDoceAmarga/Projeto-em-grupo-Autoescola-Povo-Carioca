import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import App from './App'


import './index.css'

import QuadroAulas from './pages/QuadroAulas'
import Orcamento from './pages/Orcamento'
import Consulta from './pages/Consulta'
import AreaAluno from './pages/AreaAluno'
import Services from './pages/Services'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import AgendarAula from './pages/AgendarAula'
import EditarAula from './pages/EditarAula'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='home/:id' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/service/' element={<Services />} />
          <Route path='/areaAluno' element={<AreaAluno />} />
          <Route path='/agendarAula' element={<AgendarAula />} />
          <Route path='/consulta' element={<Consulta/>} />
          <Route path='/editaraula/:id' element={<EditarAula />} />
          <Route path='/quadroAulas' element={<QuadroAulas />} />
          <Route path='/orcamento' element={<Orcamento />} />
          <Route path='*' element={<Home />} />
        </Route>


      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
