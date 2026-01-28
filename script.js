const countdown = document.getElementById("countdown-p");

const unidadeDeDia = 86400000;
const unidadeDeHora = 3600000;
const unidadeDeMinuto = 60000;

// distancia = 1237419726 ms equivalem a 14,321 dias. / 1 dia equivale a 86400000 ms
//math.floor arredonda para dias inteiros = 14

setInterval(() => {
  const dataAlvo = new Date("2026-02-12T00:00:00").getTime();
  const dataAtual = new Date().getTime();
  const distancia = dataAlvo - dataAtual;
  const dias = distancia / unidadeDeDia;
  const diasFormatados = Math.floor(dias);
  const restoDeDias = distancia % unidadeDeDia;
  const horas = restoDeDias / unidadeDeHora;
  const horasFormatadas = Math.floor(horas);
  const restoDeHoras = restoDeDias % unidadeDeHora;
  const minutos = restoDeHoras / unidadeDeMinuto;
  const minutosFormatados = Math.floor(minutos);
  const restoDosMinutos = restoDeHoras % 60000;
  const segundosFormatados = Math.floor(restoDosMinutos / 1000);

  countdown.innerText = `${diasFormatados} DIAS ${horasFormatadas} HORAS ${minutosFormatados} MINUTOS ${segundosFormatados} SEGUNDOS`;
}, 1000);
