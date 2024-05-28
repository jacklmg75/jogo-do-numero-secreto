let listaDeNumerosSorteados = [];

let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

let tentativas = 1;

limparCampo();
exibirMensagemInicial()

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do NÚMERO SECRETO';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do NÚMERO SUPER SECRETO');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function verificarChute() {
    //console.log('O botão foi clicado!');
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value;

    if(chute==numeroSecreto) {
        exibirTextoNaTela('h1', 'Opa, vc acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Puxa, finalmente hein!\nTambém depois de ${tentativas} ${palavraTentativa}...`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'Errrroouuuu!!!, É menor');
    } else {
        exibirTextoNaTela('p', 'Errrroouuuu!!!, É maior');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    //return parseInt(Math.random()*numeroLimite+1);
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista==numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo()
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;

    console.log(numeroSecreto);

    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}