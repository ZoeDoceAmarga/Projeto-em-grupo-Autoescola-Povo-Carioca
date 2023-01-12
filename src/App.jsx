import { useState } from 'react'
import './App.css'


import {BrowserRouter as Router,Route, Routes,Link} from 'react-router-dom'


//importação da páginas
import { Home } from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Services from './pages/NossosServicos'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    <Router>
    <Routes>


      {/* Inserir as rotas */}
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/services' element={<Services />} />



         {/*Qualquer coisa que o usuario digitar que não seja o que colocamos acima vai ser redirecionado para a página inicial  */}
        {/* <Route path='*' element={<Home />} /> */}
        
    </Routes>
     
</Router>
</div>
  )
}

export default App
