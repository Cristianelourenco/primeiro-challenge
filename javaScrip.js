var textInput = document.querySelector("#input-texto");
var outIput = document.querySelector("#output");

function criptografar(){
    var text = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id=" onclick="copiar()">Copiar</button>'

}

function descriptografar(){
    var text = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +
    '</textarea>' + '<button class="ntn-copiar" id=" onclick="copiar()">Copiar</button>'

}

function copiar(){
    var textoCop = documento.getElementById('#input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");

}