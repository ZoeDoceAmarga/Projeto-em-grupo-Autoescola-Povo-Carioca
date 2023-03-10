import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../components/services/api";


const EditarAula = () => {
  const navigate = useNavigate();

  const [dia, setDia] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [aula, setAula] = useState();
  const [horario, setHorario] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await API.get(`/alunos/${id}`);

      const data = response.data;

      setDia(data.dia);
      setNome(data.nome);
      setCpf(data.cpf);
      setAula(data.aula);
      setHorario(data.horario);

    }
    catch (error) {
      console.log(error);
    }
  };

  const editar = async (e) => {
    e.preventDefault();

    const post = { dia, nome, cpf, aula, horario };


    await API.put(`/alunos/${id}`, post);

    navigate("/consulta");
  };


  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <br /><br />
      <form className='formulario' onSubmit={(e) => editar(e)}>
        <h1 >Editar: "{nome}"</h1>
        <div class="form-group">
          <section>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input class="form-control"
                type="text"
                name="nome"
                id="nome"
                onChange={(e) => setNome(e.target.value)}
                value={nome || ""}
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input class="form-control"
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite o CPF"
                onChange={(e) => setCpf(e.target.value)}
                value={cpf || ""}
              />
            </div>
            <div>
              <label htmlFor="aula">aula:</label>
              <input class="form-control"
                type="text"
                name="aula"
                id="aula"
                onChange={(e) => setAula(e.target.value)}
                value={aula || ""}
              />
            </div>
            <div>
              <label htmlFor="horario">Horario:</label>
              <input class="form-control"
                type="time"
                name="horario"
                id="horario"
                placeholder="Digite a horario"
                onChange={(e) => setHorario(e.target.value)}
                value={horario || ""}
              />
            </div>
            <div>
              <label htmlFor="dia">Dia:</label>
              <input class="form-control"
                type="date"
                name="dia"
                id="dia"

                onChange={(e) => setDia(e.target.value)}
                value={dia || ""}
              />
            </div>
          </section>
        </div>
        <div>

          <Link to="/consulta">
            <button class="buttonEnviar" onClick={(e) => editar(e)}>Salvar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditarAula;