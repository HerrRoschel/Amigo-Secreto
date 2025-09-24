//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  const itemResultado = document.createElement("li");
  itemResultado.textContent = `🎉 O amigo secreto é: ${nomeSorteado}!`;
  resultado.appendChild(itemResultado);
}

