function calcular(tipo) {
    let valor, de, para, resultado;

    if (tipo === 'tempo') {
        valor = parseFloat(document.getElementById('input-tempo').value);
        de = document.getElementById('tempo-de').value;
        para = document.getElementById('tempo-para').value;
        resultado = converterTempo(valor, de, para);
        document.getElementById('resultado-tempo').value = resultado;

    } 
    else if (tipo === 'velocidade') {
        valor = parseFloat(document.getElementById('input-velocidade').value);
        de = document.getElementById('velocidade-de').value;
        para = document.getElementById('velocidade-para').value;
        resultado = converterVelocidade(valor, de, para);
        document.getElementById('resultado-velocidade').value = resultado;

    } 
    else if (tipo === 'temperatura') {
        valor = parseFloat(document.getElementById('input-temperatura').value);
        de = document.getElementById('temperatura-de').value;
        para = document.getElementById('temperatura-para').value;
        resultado = converterTemperatura(valor, de, para);
        document.getElementById('resultado-temperatura').value = resultado;

    } 
    else if (tipo === 'comprimento') {
        valor = parseFloat(document.getElementById('input-comprimento').value);
        de = document.getElementById('comprimento-de').value;
        para = document.getElementById('comprimento-para').value;
        resultado = converterComprimento(valor, de, para);
        document.getElementById('resultado-comprimento').value = resultado;

    } 
    else if (tipo === 'massa') {
        valor = parseFloat(document.getElementById('input-massa').value);
        de = document.getElementById('massa-de').value;
        para = document.getElementById('massa-para').value;
        resultado = converterMassa(valor, de, para);
        document.getElementById('resultado-massa').value = resultado;
    }
}

function converterTempo(v, de, para) {
    if (isNaN(v)) return "Digite um número válido.";

    let segundos;
    if (de === 'horas') segundos = v * 3600;
    else if (de === 'minutos') segundos = v * 60;
    else segundos = v;

    let resultado;
    if (para === 'horas') resultado = segundos / 3600;
    else if (para === 'minutos') resultado = segundos / 60;
    else resultado = segundos;

    return resultado + ' ' + para;
}

function converterVelocidade(v, de, para) {
    if (isNaN(v)) return "Digite um número válido.";

    let ms;
    if (de === 'kmh') ms = v / 3.6;
    else ms = v;

    let resultado;
    if (para === 'kmh') resultado = ms * 3.6;
    else resultado = ms;

    return resultado.toFixed(2) + ' ' + para;
}

function converterTemperatura(v, de, para) {
    if (isNaN(v)) return "Digite um número válido.";

    let resultado;

    if (de === 'celsius' && para === 'fahrenheit') {
        resultado = (v * 9 / 5) + 32;
    } 
    else if (de === 'fahrenheit' && para === 'celsius') {
        resultado = (v - 32) * 5 / 9;
    } 
    else {
        resultado = v;
    }

    return resultado.toFixed(2) + ' °' + (para === 'celsius' ? 'C' : 'F');
}

function converterComprimento(v, de, para) {
    if (isNaN(v)) return "Digite um número válido.";

    let metros;
    if (de === 'quilometro') metros = v * 1000;
    else if (de === 'centimetro') metros = v / 100;
    else if (de === 'milimetro') metros = v / 1000;
    else metros = v;

    let resultado;
    if (para === 'quilometro') resultado = metros / 1000;
    else if (para === 'metro') resultado = metros;
    else if (para === 'centimetro') resultado = metros * 100;
    else if (para === 'milimetro') resultado = metros * 1000;

    return resultado.toFixed(4) + ' ' + para;
}

function converterMassa(v, de, para) {
    if (isNaN(v)) return "Digite um número válido.";

    let gramas;
    if (de === 'quilograma') gramas = v * 1000;
    else if (de === 'miligrama') gramas = v / 1000;
    else gramas = v;

    let resultado;
    if (para === 'quilograma') resultado = gramas / 1000;
    else if (para === 'grama') resultado = gramas;
    else if (para === 'miligrama') resultado = gramas * 1000;

    return resultado.toFixed(2) + ' ' + para;
}
