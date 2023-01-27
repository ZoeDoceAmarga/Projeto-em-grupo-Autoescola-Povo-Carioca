import React from 'react'
import "../components/home/site.css"
import matricula from './validacao/matricula'

const Form = () => {
  return (
    <div className=''>
      <form className='formulario'>
        <div class="form-group">
          <label for="inputAddress2">Nome Completo</label>
          <input type="text" class="form-control" id="nomeCompleto" placeholder="Digite seu nome " required />

        </div>
        <div class="form-group">
          <label for="inputCity">Email</label>
          <input type="email" class="form-control" id="emailform" placeholder='exemplo@exemplo.com' required />
        </div>
        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputCity">Data de Nascimento</label>
            <input type="date" class="form-control" id="dataform" required />
          </div>
          <div class="form-group col-md-4">
            <label for="inputEstado">CPF</label>
            <input type="number" class="form-control" id="cpf" placeholder="Somente números" required />
          </div>
          <div class="form-group col-md-2">
            <label for="inputCEP">Telefone</label>
            <input type="tel" class="form-control" id="telefone" placeholder='11999997777' required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Rua</label>
            <input type="text" class="form-control" id="rua" placeholder="Rua Av. Edgar Romero" required />
          </div>
          <div class="form-group col-md-2">
            <label for="inputCEP">Número</label>
            <input type="number" class="form-control" id="numero" placeholder='20' required />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Bairro</label>
            <input type="text" class="form-control" id="bairro" placeholder="Madureira" required />
          </div>
        </div>

        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputCity">Cidade</label>
            <input type="text" class="form-control" id="cidade" placeholder='São Paulo' required />
          </div>
          <div class="form-group col-md-4">
            <label for="inputEstado">Estado</label>
            <input type="text" class="form-control" id="estado" placeholder="São Paulo" required />


          </div>
          <div class="form-group col-md-2">
            <label for="inputCEP">CEP</label>
            <input type="number" class="form-control" id="CEP" placeholder='11345678' required />
          </div>


        </div>

        <div id="textoerro"></div>
        <button id="btn-enviar" onClick={() => matricula()} type="submit" class="buttonEnviar">Enviar</button>
      </form>

    </div>
  )
}

export default Form
