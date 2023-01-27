import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import API from "../components/services/api";



const AgendarAula = () => {

  const navigate = useNavigate();

  const [cpf, setCpf] = useState();
  const [nome, setNome] = useState();
  const [aula, setAula] = useState();
  const [horario, setHorario] = useState();
  const [dia, setDia] = useState();


  const createPost = async (e) => {
    e.preventDefault();
    const post = {nome, cpf, aula, horario, dia };
    await API.post("/alunos", post);
    navigate("/consulta");

  };

  return (
    <div>
      <form className='formulario' onSubmit={(e) => createPost(e)} >
        <h1>Agendar Aula</h1>
        <div class="form-group">
          <section>

            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" class="form-control" name="nome" id="nome" placeholder="Escreva seu nome" onChange={(e) => setNome(e.target.value)} />
            </div>
  
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input type="text" class="form-control" name="cpf" id="cpf" placeholder="Digite o cpf" onChange={(e) => setCpf(e.target.value)} />
            </div>
            <div>
              <label htmlFor="aula">Aula:</label>
              <input type="text" class="form-control" name="aula" id="aula" placeholder="Escolha a aula" onChange={(e) => setAula(e.target.value)} />
            </div>
            <div>
              <label htmlFor="horario">Horario:</label>
              <input type="time" class="form-control" name="horario" id="horario" placeholder="Escolha horario" onChange={(e) => setHorario(e.target.value)} />
            </div>

            <div>
              <label htmlFor="dia">Dia:</label>
              <input type="date" class="form-control" name="dia" id="dia" placeholder="Escolha o dia" onChange={(e) => setDia(e.target.value)} />
            </div>

          </section>
        </div>
        <div>
          <button type="submit" class="buttonEnviar">Agendar Aula</button>
        </div>
      </form>
    </div>
  );
};

export default AgendarAula;