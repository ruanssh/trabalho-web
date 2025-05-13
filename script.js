const trilhas = {
  1: {
    titulo: "Trilha do Norte",
    imagem: "images/trilha_norte.png",
    descricao:
      "Uma aventura incrível pela floresta amazônica, seguindo o curso do majestoso Rio Negro. Esta trilha de dificuldade moderada oferece vistas deslumbrantes da floresta tropical e oportunidades para observar a rica biodiversidade local, incluindo pássaros exóticos e macacos. O percurso inclui passagens por clareiras naturais e pequenas cachoeiras, terminando em um mirante com vista panorâmica do rio.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",

    dificuldade: "Moderada",
    distancia: "8.5 km",
    duracao: "4-5 horas",
    elevacao: "320m",
  },
  2: {
    titulo: "Trilha Amazônica",
    imagem: "images/trilha_amazonica.jpg",
    descricao:
      "Esta trilha desafiadora leva você através de densa vegetação até uma das cachoeiras mais impressionantes da região amazônica. Com quedas d'água de mais de 30 metros de altura, a Cachoeira do Juruá é um espetáculo da natureza. O caminho inclui travessias de riachos e subidas íngremes, recompensadas com banhos refrescantes nas piscinas naturais ao pé da cachoeira.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",
    dificuldade: "Difícil",
    distancia: "12 km",
    duracao: "6-7 horas",
    elevacao: "450m",
  },
  3: {
    titulo: "Trilha do Rio Cristalino",
    imagem: "images/trilha_cristalina.jpg",
    descricao:
      "Percorra margens do Rio Cristalino, observe botos e aves endêmicas.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",

    dificuldade: "Moderada",
    distancia: "10 km",
    duracao: "5 horas",
    elevacao: "200m",
  },
  4: {
    titulo: "Trilha dos Macacos",
    imagem: "images/trilha_macaco.jpg",
    descricao: "Encontro com grupos de macacos e flora densa.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",

    dificuldade: "Fácil",
    distancia: "6 km",
    duracao: "3 horas",
    elevacao: "150m",
  },
  5: {
    titulo: "Trilha da Cachoeira Azul",
    imagem: "images/trilha_cachoeira.jpg",
    descricao: "Cachoeira com poço de água cristalina para banho.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",

    dificuldade: "Difícil",
    distancia: "14 km",
    duracao: "7 horas",
    elevacao: "500m",
  },
  6: {
    titulo: "Trilha do Pôr do Sol",
    imagem: "images/trilha_sol.jpg",
    descricao:
      "Mirante ideal para assistir o pôr do sol sobre a copa das árvores.",
    mapa: "https://www.google.com/maps/d/embed?mid=1_atPsb2ynCp_qmL9lxcp5g7tWnvDzFw&ehbc=2E312F",

    dificuldade: "Fácil",
    distancia: "4 km",
    duracao: "2 horas",
    elevacao: "100m",
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (trilhas[id]) {
  document.getElementById("titulo-trilha").textContent = trilhas[id].titulo;
  document.getElementById("imagem-trilha").src = trilhas[id].imagem;
  document.getElementById(
    "imagem-trilha"
  ).alt = `Imagem da trilha ${trilhas[id].titulo}`;
  document.getElementById("descricao-trilha").textContent =
    trilhas[id].descricao;
  document.getElementById("mapa-trilha").src = trilhas[id].mapa;
  document.getElementById(
    "dificuldade"
  ).textContent = `Dificuldade: ${trilhas[id].dificuldade}`;
  document.getElementById(
    "distancia"
  ).textContent = `Distância: ${trilhas[id].distancia}`;
  document.getElementById(
    "duracao"
  ).textContent = `Duração: ${trilhas[id].duracao}`;
  document.getElementById(
    "elevacao"
  ).textContent = `Elevação: ${trilhas[id].elevacao}`;
} else {
  document.getElementById("titulo-trilha").textContent =
    "Trilha não encontrada.";
}
