import React from 'react'
import Carrossel from './Carrossel'

const MainSobre = () => {
  return (
    <div>
      <div className='empresa'>
                <h2>Nossa Empresa</h2>
                <p> O Centro de Formação de Condutores Povo Carioca foi fundado em 1998. Hoje, o CFC POvo Carioca continua a cumprir a missão visionária proposta pelos seus fundadores, Sergio Ferreira Pimentel e Elizabeth Ferreira Pimentel.</p>
                <p>A missão visionária proposta pelos seus fundadores é atender todas as necessidades e expectativas dos clientes, e formar com qualidade os novos condutores e assim, contribuir para um trânsito mais seguro de forma defensiva e responsável. </p>
              </div>
              <Carrossel />
              <div className='equipe'>
                <h2>Nossa Equipe</h2>
                <p> Nossa equipe busca constantemente o aprimoramento de seus serviços por meio da qualificação dos profissionais, tecnologia atualizada e grande disposição para atender as demandas do CONTRAN e do DETRAN/RJ, com maior qualidade, agilidade e profissionalismo.
                </p>
                <p>Contamos com a nosso grupo de atendimento ao cliente, tanto presencialmente  como remotamente, atraves de rede sociais e atendimento por telefone.</p>
                <p>Além da nossa equipe de instrutores teóricos e práticos </p>
              </div>
              <div className='frota'>
                <h2>Nossa Frota</h2>
                <p> Possuímos uma frota com veículos novos, confortáveis e de diversos modelos das melhores marcas presentes no mercado.</p>

               <p> Nossos veículos passam por manutenções periódicas para fornecer aos nossos condutores total segurança.</p>

                <p>A Auto Escola Povo Carioca  se preocupa com seus alunos e por isso dispõe de grande frota de veículos para maior rapidez e conforto.</p>

               <p> Nossa frota é composta por 10 veículos:</p>
                <p>- 6 Carros;</p>
                <p >- 4 Motos; </p>

                
              </div>
      
    </div>
  )
}

export default MainSobre
