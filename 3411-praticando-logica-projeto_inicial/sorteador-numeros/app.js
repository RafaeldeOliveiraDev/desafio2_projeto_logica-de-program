function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];  

    if(quantidade < 1 || quantidade > (ate - de + 1) || de >= ate ){
        alert('Por favor, insira valores válidos para gerar o número aleatório.')
        alterarStatusBotao();
        reiniciar();
        return;
    
    }else{

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    
    if(botao.classList.contains('container__botao-desabilitado')){ // se contiver sattus da classe desabilitado
     botao.classList.remove('container__botao-desabilitado'); // remove a classe desabilitado
     botao.classList.add('container__botao'); //adiciona a classe ativa 
    
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML =  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();

}
