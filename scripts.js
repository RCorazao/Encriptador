var textarea = document.getElementById("textarea-2");
var btnEncode = document.getElementById("encriptar-button");
var btnDecode = document.getElementById("desencriptar-button");
var btnCopiar = document.getElementById("copiar-button");
var btnLimpiar = document.getElementById("limpiar-button");
var mensaje = document.getElementById("information");

const letter = ["a", "e", "i", "o", "u"];
const code = ["ai", "enter", "imes", "ober", "ufat"];

// Función para codificar un texto 
const encode = (texto) => {
    texto = texto.toLowerCase();
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        let index = letter.indexOf(char);
        if (index != -1){
            textoEncriptado += code[index];
        } else {
            textoEncriptado += char;
        }
    }
    return textoEncriptado;
}

// Función para decodificar
const decode = (texto) => {
    texto = texto.toLowerCase();
    for (let i = 0; i < code.length; i++) {
        if (texto.includes(code[i])){
            texto = texto.replaceAll(code[i], letter[i]);
        }
    }
    return texto;
}

// Funciones para la interacción de la imagen con el textarea
// Ocultar imagen
const hideImage = () => {
    if (textarea.value !== ''){
        textarea.style.backgroundImage = 'none';
        btnCopiar.style.display = 'block';
        btnLimpiar.style.display = 'block';
        mensaje.style.display = 'none';
    }
}
// Mostrar imagen
const showImage = () => {
    if (textarea.value === ''){
        textarea.style.backgroundImage = 'url(./img/img1.png)';
        btnCopiar.style.display = 'none';
        btnLimpiar.style.display = 'none';
        mensaje.style.display = 'block';
    }
}

// botón para copiar texto
const copy = (id_elemento) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

const clear = () => {
    document.getElementById("textarea-1").value = '';
    document.getElementById("textarea-2").textContent = '';
    showImage();
}

// Ejecuta la función al cargar la pagina
showImage();

btnEncode.addEventListener("click", () => {
    var texto =  document.getElementById("textarea-1").value;
    document.getElementById("textarea-2").textContent = encode(texto);
    hideImage();
});

btnDecode.addEventListener("click", () => {
    var texto =  document.getElementById("textarea-1").value;
    document.getElementById("textarea-2").textContent = decode(texto);
    hideImage();
});

btnCopiar.addEventListener("click", () => {
    copy("textarea-2");
});

btnLimpiar.addEventListener("click", () => {
    clear();
});