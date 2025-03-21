let listaDeNumeros = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log('Numero Secreto: ' + numeroSecreto);
exibirTitulo();

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTitulo(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e ' + numeroMaximo);
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log('Numero secreto: ' + numeroSecreto);
    tentativas = 1;
    exibirTitulo();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    document.getElementById('enter').removeAttribute('disabled');
    limparCampo();
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let textoTentativas = `Você acertou em ${tentativas} ${palavraTentativa}!`;
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Parabéns!');
        exibirTexto('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('enter').setAttribute('disabled', 'disabled');
        limparCampo();
    }else if(chute > numeroSecreto){
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é menor!');
        limparCampo();
        tentativas++;
    }else if(chute < numeroSecreto){
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é maior!');
        limparCampo();
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

    if(listaDeNumeros.length == numeroMaximo){
        listaDeNumeros = [];
    }

    if(listaDeNumeros.includes(numeroSecreto)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroSecreto);
        console.log(listaDeNumeros);
        return numeroSecreto;
    }
}

