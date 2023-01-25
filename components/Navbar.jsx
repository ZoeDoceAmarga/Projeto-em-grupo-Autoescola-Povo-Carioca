
import { Link } from "react-router-dom"

import '../components/home/site.css'

import Logo from "../imgs/logo.png"

const Navbar = () => {
  return (

    <div>

      <div className='w3-top' id='home'>

        <div class="w3-top w3-bar w3-orange w3-padding w3-card w3-small  ">
          <a href="/"> <img className='imglogo  ' src='https://user-images.githubusercontent.com/65381107/213047568-5209075c-9273-4f72-bd0b-501d816f2ce7.png' alt='logo' /> </a>




          <div class="w3-right w3-hide-small">
            <Link to="/" class="w3-button  w3-round-large posicao">  Página Inicial</Link>

            <Link to="/service" class="w3-button  w3-round-large  posicao">Orçamento</Link>

            <Link to="/sobre" class="w3-button  w3-round-large  posicao">Sobre</Link>

            <Link to="/areaAluno" class="w3-button  w3-round-large posicao">Área do Aluno</Link>

          </div>

        </div>
      </div>




    </div>



    // <nav id="navbar"><img id="logo" src={Logo}/>
    //     <h2>
    //       <Link to="/">
    //          Página Inicial
    //       </Link>
    //       <Link to="/sobre">Sobre</Link>
    //       <Link to="/areaAluno">Área do Aluno</Link>
    //     </h2>
    //   </nav>
  )
}

export default Navbar