let amigos = [];

function adicionarAmigo(nome) {
  let nomeAmigo = document.getElementById("amigo").value;
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nomeAmigo);
  }

  document.getElementById("amigo").value = "";
  atualizarLista();
}

let lista = document.getElementById("listaAmigos");

function atualizarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Lista vazia");
  } else {
    let numeroAleatorio = parseInt(Math.random() * amigos.length);

    let ganhador = amigos[numeroAleatorio];

    lista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.innerHTML = `O amigo secreto sorteado é ${ganhador}`;
    resultado.appendChild(li);
  }
}
