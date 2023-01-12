import React from 'react'
import styles from './StyleNavbar.css'
import {Link} from 'react-router-dom'
import Logo from "./autoescola.png"

const Navbar = () => {
  return (
    <div>
      
      <nav className='navbar'>
      <img className='logo' src={Logo}/>
      <ul>
      <Link to="/"> <li>Inicio</li></Link>
       <Link to="/sobre"> <li>Quem somos</li></Link>
       <Link to="/services"> <li>Nossos serviços</li></Link>
       <Link to="/contato"><li>Contato</li></Link>
        <li>Depoimentos</li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar