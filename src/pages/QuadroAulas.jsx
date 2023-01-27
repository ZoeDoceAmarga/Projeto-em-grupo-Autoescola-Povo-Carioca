import { useState, useEffect } from "react";
import API from "../components/services/api";

const QuadroAulas = () => {
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
        <div className="lista-aulas">
          {posts.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                  <hr></hr>
                  <h2>{post.aula}</h2>
                  <p>{post.dia}</p>
                  <p>{post.instrutor}</p>
                  <p>{post.duração}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default QuadroAulas;