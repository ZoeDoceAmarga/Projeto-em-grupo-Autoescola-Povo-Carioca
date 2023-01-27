

import React from 'react'
import { Link } from 'react-router-dom'

const MainAreaAluno = () => {
  return (
    <div className='containerAreaAluno'>
      <h2 className='title-areaAluno'>Área do Aluno</h2>
          <Link to={'/consulta'}><button className='btn1 '>Consultar Aulas</button></Link>
          <Link to={'/agendarAula'}><button className='btn1 '>Agendar Aulas</button></Link>
          <Link to={'/quadroAulas'}><button className='btn1 '>Quadro Aulas</button></Link>
    </div>
  )
}

export default MainAreaAluno
