import React from 'react'

import './stylesAreaAluno.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const AreaAluno = () => {
  return (
    <div className=''>
      <Navbar />
        <div className='container'>
          <h2 className='titulo'>Área do Aluno</h2>
          <button className='btn1 btn'>Consultar Aulas</button>
          <button className='btn2 btn'>Agendar Aulas</button>
          <button className='btn3 btn'>Desmarcar Aulas</button>
        </div>

      <Footer/>
      
    </div>
  )
}

export default AreaAluno
