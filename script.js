// 1. Selecionamos os elementos onde os números vão aparecer
const elDias = document.getElementById('dias');
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');

// 2. Definimos a data alvo (seu objetivo)
const dataAlvo = new Date("2026-02-12T07:20:00").getTime();

// Constantes para facilitar os cálculos
const unidadeDeDia = 86400000;
const unidadeDeHora = 3600000;
const unidadeDeMinuto = 60000;

// 3. O "Motor" do contador
setInterval(() => {
    const dataAtual = new Date().getTime();
    const distancia = dataAlvo - dataAtual;

    if (distancia < 0) {
        // Opcional: O que acontece quando o tempo acaba?
        document.querySelector('.contador-container').innerHTML = "<h2>🎉 Chegou a Hora! 🎉</h2>";
        return;
    }

    // Cálculos (Sua lógica perfeita!)
    const diasTotal = Math.floor(distancia / unidadeDeDia);
    
    const restoDeDias = distancia % unidadeDeDia;
    const horasTotal = Math.floor(restoDeDias / unidadeDeHora);
    
    const restoDeHoras = restoDeDias % unidadeDeHora;
    const minutosTotal = Math.floor(restoDeHoras / unidadeDeMinuto);
    
    const restoDeMinutos = restoDeHoras % unidadeDeMinuto;
    const segundosTotal = Math.floor(restoDeMinutos / 1000);

    // 4. Injetando os valores nos blocos com o "0" à esquerda (padStart)
    elDias.innerText = diasTotal;
    elHoras.innerText = horasTotal.toString().padStart(2, '0');
    elMinutos.innerText = minutosTotal.toString().padStart(2, '0');
    elSegundos.innerText = segundosTotal.toString().padStart(2, '0');

}, 1000);