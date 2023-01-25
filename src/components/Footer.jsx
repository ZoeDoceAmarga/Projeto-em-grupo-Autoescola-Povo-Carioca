import React from 'react'
import '../components/home/site.css'
import {ImFacebook2,ImWhatsapp,ImInstagram} from 'react-icons/im'

const Footer = props => {
  return (
    <div className='footer'>
      {/* <h2 className='titleFooter'>Faça seu orçamento</h2> */}

      <div className='contact' id='contact'>

        <div className='contact-list' >
          <h5 className='subtitleFooter'><i className='fa fa-phone w3-xlarge w3-text-light-grey '></i> Horário de Atendimento</h5>
          <p className='paragrafo-footer'> Segunda a sexta:   07h a 22h </p>
         <p className='paragrafo-footer'>Sábado: 10h a 17h </p>
        </div>
        <div className='contact-list contact-address'  >
          <h5  className='subtitleFooter'> <i className='fa fa-map-marker w3-xlarge w3-text-light-grey '> </i> Unidades </h5>
          <p className='paragrafo-footer'>Madureira</p>
          <p className='paragrafo-footer'>Marechal Hermes</p>
          
        </div>
        
        <div className='contact-list' >
          <h5  className='subtitleFooter'><i className='fa fa-phone w3-xlarge w3-text-light-grey'></i> Telefone</h5>
          <p className='paragrafo-footer'>(21)9999-8888</p>
          <p className='paragrafo-footer' > (21)9777-3333</p>
        </div>
        <div className='contact-list' >
          <h5  className='subtitleFooter'><i className='fa fa-phone w3-xlarge w3-text-light-grey'></i> Rede Sociais</h5>
          <p className='paragrafo-footer '> <ImFacebook2 /> <ImWhatsapp/>  <ImInstagram/>   </p>
        </div>
        <div className='contact-list' >
          <h5  className='subtitleFooter'><i className='fa fa-phone w3-xlarge w3-text-light-grey'></i> Links Uteis</h5>
          <ul  className='links'>
          <li> <a className='paragrafo-footer' href='https://www.detran.rj.gov.br/'> Detran </a> </li>
          <li> <a className='paragrafo-footer' href='https://www.denatran.org/'> Denatran </a> </li>
          <li> <a className='paragrafo-footer' href='https://sindaerj.com.br/'> SINDAERJ</a> </li>
          
        </ul>
        </div>
        
      </div>
      <a href="/"> <img className='imglogoFooter' src='https://user-images.githubusercontent.com/65381107/213047568-5209075c-9273-4f72-bd0b-501d816f2ce7.png' alt='logo' /> </a>
    </div>
  )
}

export default Footer