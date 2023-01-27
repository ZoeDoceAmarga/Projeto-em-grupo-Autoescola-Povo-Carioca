import React from 'react'
import "../components/home/site.css"

const Form = () => {
  return (
    <div className=''>
        <form className='formulario'>
            <div class="form-group">
    <label for="inputAddress2">Nome Completo</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Digite seu nome "/>
  </div>
  <div class="form-group">
      <label for="inputCity">Email</label>
      <input type="text" class="form-control" id="inputCity"placeholder='aaaaaaa@gmail.com'/>
    </div>
  <div class="form-row">
  
    <div class="form-group col-md-6">
      <label for="inputCity">Data de Nascimento</label>
      <input type="date" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">CPF</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Somente números "/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">Telefone</label>
      <input type="text" class="form-control" id="inputCEP" placeholder='(xx) 99999-7777'/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Endereço</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Rua dos Bobos, nº 0"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Bairro</label>
      <input type="text" class="form-control" id="inputCPF" placeholder="Bairro dos que pisam na bola"/>
    </div>
  </div>
  
  <div class="form-row">
  
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP"/>
    </div>
  </div>
  
  <button type="submit" class="buttonEnviar ">Enviar</button>
</form>
    
    </div>
  )
}

export default Form
