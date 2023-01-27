import { useState, useEffect } from "react";
import API from "../components/services/api";


const Orcamento = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await API.get("/Orcamento");

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
      <div className="lista-aulas">
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
                <hr></hr>
                <h2>{post.nome}</h2>
                <p>{post.descrição}</p>
                <p>{post.preco}</p>
                <p>{post.pagamento}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orcamento;