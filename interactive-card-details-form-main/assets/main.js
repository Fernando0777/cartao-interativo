const nome = document.getElementsByClassName('nomecartao');
const numero = document.getElementsByClassName('numerocartao');
const mes = document.getElementsByClassName('cartaomes');
const ano = document.getElementsByClassName('cartaoano');
const codigo = document.getElementsByClassName('cartaocodigo');


function nomeValue(){
    const nomeCartao = document.querySelector('#nome-cartao');
    const texto = nomeCartao.value;
    
    
    for (let index = 0; index < nome.length; index++) {
        const element = nome[index];
        element.innerText = texto;
    }
}

function numValue(){
    const numeroCartao = document.querySelector('#numero-cartao');
    const texto = numeroCartao.value;

    for (let index = 0; index < numero.length; index++) {
        const element = numero[index];
        element.innerText = texto;
    }
}

function mesValue(){
    const mesCartao = document.querySelector('#cartao-mes');
    const texto = mesCartao.value;
    
    for (let index = 0; index < mes.length; index++) {
        const element = mes[index];
        element.innerText = texto;
    }
}

function anoValue(){
    const anoCartao = document.querySelector('#cartao-ano');
    const texto = anoCartao.value;

    for (let index = 0; index < ano.length; index++) {
        const element = ano[index];
        element.innerText = texto;
    }
}

function codigoValue(){
    const codigoCartao = document.querySelector('#cartao-codigo');
    const texto = codigoCartao.value;

    for (let index = 0; index < codigo.length; index++) {
        const element = codigo[index];
        element.innerText = texto
    }
}



