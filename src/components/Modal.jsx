import { useState, useEffect } from "react";
import API from "./services/api";

const Modal = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await API.get("/habilitacaoDeMoto");

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
            <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog"
                aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="TituloModalCentralizado">Orçamento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                {posts.length === 0 ? (
                                    <p>Carregando...</p>
                                ) : (
                                    posts.map((post) => (
                                        <div key={post.id}>
                                            <h2>{post.nome}</h2>
                                            <p>{post.descrição}</p>
                                            <p>{post.preco}</p>
                                            <p>{post.pagamento}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal



