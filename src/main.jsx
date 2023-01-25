import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"


import App from './App'


import './index.css'


import Aluno from './pages/Aluno'
import AreaAluno from './pages/AreaAluno'
import Contato from './pages/Contato'
import Services from './pages/Services'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import Consulta from './pages/Consulta'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> 
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/service' element={<Services />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/areaAluno' element={<AreaAluno />} />
          <Route path='/consulta' element={<Consulta/>} />
          <Route path='aluno/:id' element={<Aluno />} />
          <Route path='*' element={<Home />}/>
          
        </Route> 


      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)
