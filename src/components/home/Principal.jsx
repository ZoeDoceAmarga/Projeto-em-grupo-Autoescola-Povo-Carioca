import "../home/site.css"

const Principal = props => {
    return (
        <main className='fundo'>
            {/* <h2 className='title  w3-animate-opacity' id='artes'>Serviços</h2> */}
            <div className='games'>
                <div className='game-list'>
                    <img className='imgserv' src='https://user-images.githubusercontent.com/65381107/213037796-0b5b1ce0-8012-42a6-a9de-59180045458b.png' alt='' />
                    <h3>1° Habilitação Carro</h3>
                    <a href="http://127.0.0.1:5173/orcamento">
                    <button onclick="popHabilitacaob()" type="button" id="btnHabilitacaoba" class="buttonEnviar" data-toggle="modal" data-target="#ExemploModalCentralizado" > Solicite o orçamento</button></a>
                </div>
                <div className='game-list'>
                    <img className='imgserv' src='https://user-images.githubusercontent.com/65381107/213037816-6f15a20f-0b36-4b82-af3a-f2bfbbcd16ce.png' alt='' />
                    <h3>1° Habilitação Moto</h3>
                    <a href="http://127.0.0.1:5173/orcamento">
                    <button onclick="popHabilitacaob()" type="button" id="btnHabilitacaoba" class="buttonEnviar" data-toggle="modal" data-target="#ExemploModalCentralizado" > Solicite o orçamento</button></a>


                </div>
                <div className='game-list'>
                    <img id="imgAdi" src='https://user-images.githubusercontent.com/65381107/214331902-c04f5d43-94c2-4400-94e3-53cdeb67eea2.png' alt='' />
                    <h3>Adição</h3>
                    <a href="http://127.0.0.1:5173/orcamento">
                    <button onclick="popHabilitacaob()" type="button" id="btnHabilitacaoba" class="buttonEnviar" data-toggle="modal" data-target="#ExemploModalCentralizado" > Solicite o orçamento</button></a>

                </div>
                <div className='game-list'>
                    <img id='imgRenova' src='https://user-images.githubusercontent.com/65381107/213037800-c8e6666f-8afd-47aa-b238-7c799aa8cb19.png' alt='' />
                    <h3>Renovação</h3>
                    <a href="http://127.0.0.1:5173/orcamento">
                    <button onclick="popHabilitacaob()" type="button" id="btnHabilitacaoba" class="buttonEnviar" data-toggle="modal" data-target="#ExemploModalCentralizado" > Solicite o orçamento</button></a>

                </div>

                <div className='game-list'>
                    <img id="imagemhabi" src='https://user-images.githubusercontent.com/65381107/214332594-c02cc704-965e-4e9c-ab54-02daf3d9a50a.png' alt='' />
                    <h3>Aulas Para Habilitados</h3>
                    <a href="http://127.0.0.1:5173/orcamento">
                    <button onclick="popHabilitacaob()" type="button" id="btnHabilitacaoba" class="buttonEnviar" data-toggle="modal" data-target="#ExemploModalCentralizado" > Solicite o orçamento</button></a>

                </div>


            </div>
        </main>
    )
}

export default Principal
