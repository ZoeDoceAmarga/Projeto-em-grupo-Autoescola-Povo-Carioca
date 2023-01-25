import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import API from "../components/services/api";


const Consulta = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await API.get("/AulasTeoricas");

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
      <div>
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post) => (
            <div className="aulas-container" key={post.id}>
              <ul>
                <li>{post.dia}</li>
                <li>{post.aula}</li>
                <li>{post.instrutor}</li>
                <li>{post.duração}</li>
              </ul>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Consulta;