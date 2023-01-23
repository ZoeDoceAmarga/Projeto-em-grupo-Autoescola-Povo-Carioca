import './stylesHome.css'

import Carousel from '../components/carousel';



import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


import ImageCarro from "../imgs/carro-branco.png"
import ImageMoto from "../imgs/moto-branca.png"
import ImageHabilitado from "../imgs/habilitado-branco.png"
import ImageAdicao from "../imgs/adicao.png"
import ImageOr from "../imgs/or.png"
import ImageRenov from "../imgs/renov.png"

export const Home = () => {
  return (
    <div className="global">
        <Navbar />
         <div className="conteiner">
       
           
        <div className="carrossel">

            <Carousel />
                

        </div>
            <div className="services">

                <h2 className="t2">Nossos Serviços</h2>


                <div className='item1 card'>
                    
                    <img className='imagemCar' src={ImageCarro}/><p className="cont">1 Habilitação A</p>
                </div>


                <div className='item2 card'>
                    <img className='imagemMoto' src={ImageMoto}/>

                    <p className="cont" >1 Habilitação B</p>
                </div>
                
                <div className='item3 card'>
                    
                
                    <img className='imagem' src={ImageMoto}/>
                    <img className='imagemAd' src={ImageAdicao}/>
                    <img className='imagem' src={ImageCarro}/><p className="cont">1 Habilitação AB</p>
                </div>


                <div className='item4 card'>
                    
                    <img className='imagem' src={ImageMoto}/>
                    <img className='imagemAd' src={ImageOr}/>
                    <img className='imagem' src={ImageCarro}/><p className="cont ">Adição A ou B</p>
                </div>

                <div className='item5 card'>
                    <img className='imagemRenov' src={ImageRenov}/>
                    <p className="cont">Renovação de carteira</p>
                </div>

                <div className='item6 card'>
                    
                    <img className='imagemHab' src={ImageHabilitado}/>
                    <p className="cont">Aulas para habilitados</p>
                    
                </div>
                



            </div>
            <div className="sobre">
                <h2 className="titulo-sobre">Por que escolher a Autoescola Povo Carioca?</h2>
                <div className="blocos bloco1">
                    <h3>Nossa Frota</h3>
                    <p>Possuímos frota com carros e motos novos</p>
                </div>
                <div className=" blocos bloco2">
                    <h3>Conforto</h3>
                    <p>A Autoescola Povo Carioca tem mais de 10 anos no mercado formando condutores. Possui uma frota de veículos novos com ar condicionado, sala de aula climatizada e informatizada, simuladores próprios.</p>
                </div>
                <div className=" blocos bloco3">
                    <h3>Nossa Equipe</h3>
                    <p>Nossa equipe é capacitada para prestar o melhor atendimento aos nossos alunos, além disso dispomos de agenda online e App do aluno.</p>
                </div>
                
            </div>
            <Footer />

      </div>     
    </div>
  );
}
