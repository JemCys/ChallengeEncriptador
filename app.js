// Función para mostrar la alerta personalizada
function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('customAlertMessage');
    const alertButton = document.getElementById('customAlertButton');

    alertMessage.textContent = message;
    alertBox.style.display = 'flex';

    alertButton.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
}

// Función para encriptar el texto
function encriptarTexto() {
    let textoOriginal = document.getElementById('Escribe').value.toLowerCase();

    let textoEncriptado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    let resultadosDiv = document.querySelector('.resultados');
    resultadosDiv.innerHTML = `
        <img class="waiting" id="waiting" src="img/check.png" alt="texto encriptado">
        <div class="textoReloj">
            <p id="mensajeEncriptado">${textoEncriptado}</p>
        </div>
        <button class="copiar" id="copiar" type="button">
            <p>Copiar</p>
        </button>
    `;

    let botonCopiar = document.getElementById('copiar');
    botonCopiar.disabled = false;
    botonCopiar.addEventListener('click', copiarTexto);
}

document.getElementById('buttonEn').addEventListener('click', function() {
    encriptarTexto();
});

function desencriptarTexto() {
    let textoOriginal = document.getElementById('Escribe').value.toLowerCase();

    let textoDecrypt = textoOriginal
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    let resultadosDiv = document.querySelector('.resultados');
    resultadosDiv.innerHTML = `
        <img class="waiting" id="waiting" src="img/check.png" alt="texto encriptado">
        <div class="textoReloj">
            <p id="mensajeEncriptado">${textoDecrypt}</p>
        </div>
        <button class="copiar" id="copiar" type="button">
            <p>Copiar</p>
        </button>
    `;

    let botonCopiar = document.getElementById('copiar');
    botonCopiar.disabled = false;
    botonCopiar.addEventListener('click', copiarTexto);
}

document.getElementById('buttonDe').addEventListener('click', function() {
    desencriptarTexto();
});

function copiarTexto() {
    let mensajeEncriptado = document.getElementById('mensajeEncriptado');

    if (mensajeEncriptado) {
        let textoACopiar = mensajeEncriptado.innerText;
        navigator.clipboard.writeText(textoACopiar).then(function() {
            showAlert('Texto copiado al portapapeles');
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    }
}
