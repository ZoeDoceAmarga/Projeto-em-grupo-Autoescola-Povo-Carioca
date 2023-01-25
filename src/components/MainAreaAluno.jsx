
import { Link } from "react-router-dom";
import React from 'react'

const MainAreaAluno = () => {
  return (
    <div className='containerAreaAluno'>
      <h2 className='title-areaAluno'>Área do Aluno</h2>
          <Link to={'/consulta'}>
            <button  className='btn1 btn'>Consultar Aulas</button>
          </Link>
          <button className='btn2 '>Agendar Aulas</button>
          <button className='btn3 '>Desmarcar Aulas</button>
    </div>
  )
}

export default MainAreaAluno
