// app.js
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = amigoInput.value.trim();

  if (nomeAmigo !== "") {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = ""; // Limpa o input
  }
}

function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos dois amigos para o sorteio.");
    return;
  }

  // Embaralha o array de amigos usando o algoritmo de Fisher-Yates
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
  }

  resultado.innerHTML = ""; // Limpa a lista de resultados

  // Cria os pares de amigos
  for (let i = 0; i < amigos.length; i++) {
    const amigoAtual = amigos[i];
    const amigoSorteado = amigos[(i + 1) % amigos.length]; // Circular

    const li = document.createElement('li');
    li.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
    resultado.appendChild(li);
  }
}


// Evento para adicionar amigo com a tecla Enter
amigoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 é o código da tecla Enter
        adicionarAmigo();
    }
});