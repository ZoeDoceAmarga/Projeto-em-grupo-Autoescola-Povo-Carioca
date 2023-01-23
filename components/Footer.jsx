import React from 'react'
import './styleFooter.css'
import {Link} from 'react-router-dom'
import Logo from "./autoescola.png"

const Footer = () => {
  return (
    <div>
      
      <footer className='footer'>
      <img className='logo' src={Logo}/>
      <div className='atendimento'>
        <h2 className='titulosFooter'>Horário de atendimento</h2>
        <p> Segunda a sexta:   07h a 22h </p>
        <p>Sábado: 10h a 17h </p>
      </div>
      <div className='contato'>
        <h2 className='titulosFooter'>Contatos</h2>
        <p>(21) 9 5577-8844</p>
        <p>(21) 9 5577-8844</p>
        <p>(21) 9 5577-8844</p>
      </div>
      <div className='local'>
        <h2 className='titulosFooter'>Localização</h2>
        <p> Rua: Santo Amaro,555</p>
        <p> Bairro: Lugar Nenhum </p>
      
      </div>


      <div className='linksUteis'>
        <h2 className='titulosFooter' >Links Uteis</h2>
        <ul className='links'>
          <li> <a href='https://www.detran.rj.gov.br/'> Detran </a> </li>
          <li> <a href='https://www.denatran.org/'> Denatran </a> </li>
          <li> <a href='https://sindaerj.com.br/'> SINDAERJ</a> </li>
          <li> <a href='https://www.portaldotransito.com.br/'> PORTAL DO TRÂNSITO </a> </li>
        </ul>
      </div>
      <div className='redeSocial'>
        <h2 className='titulosFooter'>Redes Sociais</h2>
        <p>redes sociais</p>
      </div>
      <div className='unidade'>
        <h2 className='titulosFooter'>Unidades</h2>
        <p>Madureira</p>
        <p>Marechal Hermes</p>
        <p>Bangu</p>
      </div>
      
    </footer>
      
    </div>
  )
}

export default Footer