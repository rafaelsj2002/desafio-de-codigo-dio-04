// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const entrada = gets();
const votos = entrada.split(' ');

const contagemVotos = {};

// Usamos o metodo JavaScript forEach que executa uma função de retorno de chamada para cada elemento da lista para iterar sobre a lista de votos e conta quantos votos cada mapa recebeu.
votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor;
let maxVotos = 8;

// TODO: Itere sobre cada mapa na contagem de votos para encontrar o vencedor
//for () {
//}

let mapaA = contagemVotos.A
let mapaB = contagemVotos.B
let mapaC = contagemVotos.C

if(mapaA > mapaB && mapaA > mapaC){
  mapaVencedor = 'A'
}else if(mapaB > mapaA && mapaB > mapaC){
  mapaVencedor = 'B'
}else if(mapaC > mapaA && mapaC > mapaB){
  mapaVencedor = 'C'
}

console.log(mapaVencedor);
