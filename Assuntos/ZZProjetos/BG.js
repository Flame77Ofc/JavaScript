        // ~ BG
// !!! Espadas
let espadas = [
  { nome: "Espada de Madeira", dano: 5, durabilidade: 100, cor: "marrom" },
  { nome: "Espada de Pedra", dano: 6, durabilidade: 200, cor: "cinza" },
  { nome: "Espada de Ferro", dano: 7, durabilidade: 250, cor: "prata" },
  { nome: "Espada de Ouro", dano: 9, durabilidade: 500, cor: "ouro" },
  { nome: "Espada de Diamante", dano: 12, durabilidade: 750, cor: "azul" },
];

// !!! Armaduras

let armaduras = [
  {
    tipo: "Couro",
    bota: { nome: "Bota de Couro", protecao: 1, durabilidade: 55 },
    calca: { nome: "Calca de Couro", protecao: 2, durabilidade: 75 },
    peito: { nome: "Peitoral de Couro", protecao: 3, durabilidade: 80 },
    capacete: { nome: "Capacete de Couro", protecao: 1, durabilidade: 55 },
  },
  {
    tipo: "Ferro",
    bota: { nome: "Bota de Ferro", protecao: 2, durabilidade: 165 },
    calca: { nome: "Calca de Ferro", protecao: 3, durabilidade: 225 },
    peito: { nome: "Peitoral de Ferro", protecao: 4, durabilidade: 240 },
    capacete: { nome: "Capacete de Ferro", protecao: 2, durabilidade: 165 },
  },
  {
      tipo: "Ouro",
      bota: { nome: "Bota de Ouro", protecao: 3, durabilidade: 295 },
      calca: { nome: "Calca de Ouro", protecao: 4, durabilidade: 345 },
      peitoral: { nome: "Peitoral de Ouro", protecao: 5, durabilidade: 365 },
      capacete: { nome: "Capacete de Ouro", protecao: 3, durabilidade: 295 },
  },
  {
      tipo: "Diamante",
      bota: { nome: "Bota de Diamante", protecao: 4, durabilidade: 415 },
      calca: { nome: "Calca de Diamante", protecao: 5, durabilidade: 490 },
      peitoral: { nome: "Peitoral de Diamante", protecao: 7, durabilidade: 525 },
      capacete: { nome: "Capacete de Diamante", protecao: 4, durabilidade: 415}, 
  },
];

// !!! Poções

let pocoes = [
  { nome: "Pocao de Vida", efeito: "Ao consumir, o jogador terá +5 de vida recuperados", duracao: "Instantanêo" },
  { nome: "Pocao de Pulo Alto", efeito: "Ao consumir, o jogador saltará mais alto", duracao: "2 minutos e 30 segundos" },
  { nome: "Pocao de Invisibilidade", efeito: "Ao consumir, o jogador ficará para outros usuários", duracao: "2 minutos" },
  { nome: "Pocao de Velocidade", efeito: "Ao consumir, o jogador terá velocidade acelerada", duracao: "2 minutos e 30 segundos" }
];

// !!! Alimentos

let alimentos = [
  { nome: "Maca Dourada", consumo: "Ao consumir, o jogador recuperará +4 de saciedade além de +4 de vida extra" },
  { nome: "Pao", consumo: "Ao consumir, o jogador recuperará +5 de saciedade" },
  { nome: "Frango Frito", consumo: "Ao consumir, o jogador recuperará +8 de saciedade" },
];

// !!! Veículos

let veiculos = [
  { nome: "Aviao", velocidade: "100km/h" },
  { nome: "Carro de Policia", velocidade: "20km/h" },
  { nome: "Chevrolet Cruze Vermelho", velocidade: "20km/h" },
  { nome: "Chevrolet Avalanche Preto", velocidade: "25km/h" },
  { nome: "HMMWV", velocidade: "25km/h" },
];

// !!! Emotes Básicos

let emotes = [
  { nome: "Acenar", reacao: "Ao usar, o jogador acena, comprimentando outro jogador", toxico: false },
  { nome: "Duvida", reacao: "Ao usar, o jogador tem dúvida sobre algo", toxico: false },
  { nome: "Chorar", reacao: "Ao usar, o jogador chora", toxico: false },
  { nome: "Rir", reacao: "Ao usar, o jogador ri", toxico: false }, // Corrigido o erro da chave duplicada
  { nome: "Flexionar", reacao: "Ao usar, o jogador mostra amor por outro jogador.", toxico: false },
  { nome: "Certo", reacao: "Ao usar, o jogador aponta que algo está certo", toxico: false },
  { nome: "Frustacao", reacao: "Ao usar, o jogador indica que algo foi estúpido", toxico: true },
  { nome: "Negativo", reacao: "Ao usar, o jogador indica que algo está errado", toxico: false },
  { nome: "Irritacao", reacao: "Ao usar, o jogador indica que está brabo ou irritado", toxico: false },
  { nome: "Concordar", reacao: "Ao usar, o jogador indica que está concordando com algo, semelhante ao 'Certo'", toxico: false }
];

const CONCAT = espadas.concat(armaduras, pocoes, alimentos, veiculos, emotes)

// Seleciona um emote aleatório
console.log(CONCAT[Math.floor(Math.random() * CONCAT.length)]);