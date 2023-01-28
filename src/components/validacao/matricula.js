function matricula() {
  const nome = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("emailform").value;
  const nascimento = document.getElementById("dataform").value;
  const cpf = document.getElementById("cpf").value;
  const tel = document.getElementById("telefone").value;
  const rua = document.getElementById("rua").value;
  const numero = document.getElementById("numero").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value
  const cep = document.getElementById("CEP").value;

  const caixaErro = document.getElementById("textoerro");

  const validacaoNome = nome.length < 5
  const validacaoEmail = email.indexOf("@", 3) == -1 || email.indexOf(".com", email.indexOf("@")) == -1
  const validacaoNascimento = nascimento.length < 10 || nascimento.length > 10
  const validacaoCpf = cpf.length < 11 || cpf.length > 11
  const validacaoTel = tel.length < 10 || tel.length > 11
  const validacaoRua = rua.length < 3
  const validacaoNumero = numero.length < 1
  const validacaoBairro = bairro.length < 3
  const validacaoCidade = cidade.length < 3
  const validacaoEstado = estado.length < 3
  const validacaoCep = cep.length !== 8

  caixaErro.textContent = ''

  if (validacaoNome || validacaoEmail || validacaoNascimento || validacaoCpf || validacaoTel || validacaoRua || validacaoNumero || validacaoBairro || validacaoCidade || validacaoEstado || validacaoCep) {
    try {
      if (validacaoNome)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um nome válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoEmail)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um email válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoNascimento)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira uma data válida</p>`;
    } catch (erro) { }

    try {
      if (validacaoCpf) throw caixaErro.innerHTML += `<p class="avisoErro">Insira um CPF válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoTel)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um telefone válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoRua)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um nome de rua válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoNumero)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um número válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoBairro)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um nome de bairro válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoCidade)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um nome de cidade válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoEstado)
        throw caixaErro.innerHTML += `<p class="avisoErro">Insira um nome de estado válido</p>`;
    } catch (erro) { }

    try {
      if (validacaoCep) throw caixaErro.innerHTML += `<p class="avisoErro">Insira um CEP válido</p>`;
    } catch (erro) { }

  }
  else {
    alert('Matriculado com Sucesso')
  }

}

export default matricula;
