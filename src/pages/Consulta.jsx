import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import API from "../components/services/api";




const excluirAula = async (id) => {
  await API.delete(`/alunos/${id}`)
    .then(res => alert('Aula deletada com sucesso', res))
    .catch(err => console.log(err))
  setPosts(posts.filter(post => post.id !== id))
};


const Consulta = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await API.get("/alunos");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="lista-alunos">
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post) => (
            <div>
              <Link to={`/editaraula/${post.id}`}><button class="buttonEnviar">Editar</button></Link>
              <Link to={`/areaAluno`}>
                <button class="buttonExcluir" onClick={() => excluirAula(post.id)}>Excluir</button>
              </Link>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Aula</th>
                    <th>Horário</th>
                    <th>Dia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={post.id}>
                    <td>{post.nome}</td>
                    <td>{post.cpf}</td>
                    <td>{post.aula}</td>
                    <td>{post.horario}</td>
                    <td>{post.dia}</td>
                  </tr>

                </tbody>

              </Table>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Consulta;