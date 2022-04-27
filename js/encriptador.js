var textoEntrada = document.getElementById("entradaTexto"); //toma datos texto entrada
var textoSalida = document.getElementById("salidaTexto"); //salida del texto encriptado o desencriptado

btnCopiar.hidden= true; //esconder boton copiar al inicio
salidaTexto.hidden= true; //esconder cuadro de texto al inicio

function codificar(cadena){ //codificacion
    return cadena
    .replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}
function decodificar (rev){ //decodificacion
    return rev
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}
function encriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".sin-mensaje").style.display = "none";
    document.querySelector(".mensaje-texto-vacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;

    textoSalida.textContent = codificar(normalizar);
}
function desencriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    textoSalida.textContent = decodificar(normalizar);
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".sin-mensaje").style.display = "none";
    document.querySelector(".mensaje-texto-vacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;
}

function copiar(){
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoSalida.value);
    alert("El texto fue copiado al portapapeles");
}
/*hasta aca esta todo ok*/
