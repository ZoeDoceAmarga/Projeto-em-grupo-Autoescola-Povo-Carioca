import './stylesHome.css'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="global">
        <Navbar />
         <div className="conteiner">
       
           
        <div className="carrosel">
                <h2>carrosel</h2>

        </div>
            <div className="services">
                <h2 className="t2">Nossos Serviços</h2>
                <p className="cont item1">1 Habilitação A</p>
                <p className="cont item2" >1 Habilitação B</p>
                <p className="cont item3
                ">1 Habilitação AB</p>
                <p className="cont item4">Adição A ou B</p>
                <p className="cont item5">Renovação de carteira</p>
                <p className="cont item6">Aulas para habilitados</p>
            </div>
            <div className="sobre">
                <h2 className="titulo-sobre">Por que?</h2>
                <div className="bloco1">
                    <p>Nossa Frota</p>
                </div>
                <div className="bloco2">
                    <p>Conforto</p>
                </div>
                <div className="bloco3">
                    <p>Nossa Equipe</p>
                </div>
                
            </div>
            <div className="visita">
                <h2 className="titulo-visita">Marque sua visita</h2>
                <div className="form">

                </div>
                
            </div>
            <Footer />

      </div>     
    </div>
  );
}
