function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaLinha(linha) {
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdPontos = document.createElement("td");
    tdNome.innerHTML = linha.nome;
    tdPontos.innerHTML = linha.pontos;
    tr.appendChild(tdNome);
    tr.appendChild(tdPontos);
    return tr;
}
 
function main() {
  let data = fazGet("https://tankk-fca34-default-rtdb.firebaseio.com/pontos.json");
  let pontos = JSON.parse(data);
  console.log(pontos);
  let jogadores = Object.entries(pontos).map(([key, value]) => ({ 
    nome: key,
    pontos: value
   }));
    console.log(jogadores);
  let tabela = document.getElementById("tabela");
  jogadores.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  })
}

main();
