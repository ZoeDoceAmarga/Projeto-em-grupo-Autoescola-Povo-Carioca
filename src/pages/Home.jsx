import './stylesHome.css'


import Navbar from '../components/Navbar';
import Carrosel from '../components/Carrosel';
import Servicos from '../components/Servicos';
import Sobre from '../components/Sobre';
import Visita from '../components/Visita';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="global">
        <Navbar/>
         <div className="conteiner">
            <Carrosel/>
            <Servicos/>
            <Sobre/>
            <Visita/>
            <Footer/>
      </div>     
    </div>
  );
}
