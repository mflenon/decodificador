// Criptografar
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// Media Screen
const tamanhoMensagem = document.querySelector("body .mensagem");


// Esconder o boneco
const targetDiv = document.getElementById("texto-cheio");
const btnCript = document.getElementById("cript");
const btnDesen = document.getElementById("desen");
const btnCopiar = document.getElementById("copy");

btnCript.addEventListener('click', e => {
    btnEncriptar();
    targetDiv.style.display = "none";
    btnCopiar.style.display = "inline";
});

btnDesen.addEventListener('click', e => {
    btnDesencriptar();
});

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value).then(() => {
        console.log('Texto copiado com sucesso: ' + text);
    });
}
