// validaciones.js: validaciones del formulario (archivo independiente)
// Se llama desde el botón con: onclick="return validar()"

// Muestra u oculta el mensaje de error de un campo (clases de Bootstrap)
function marcar(input, mensaje) {
    var aviso = document.getElementById(input.id + 'Error');
    if (mensaje === '') {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        aviso.textContent = '';
        return true;
    }
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    aviso.textContent = mensaje;
    return false;
}

function validarNombre(id) {
    var campo = document.getElementById(id);
    var texto = campo.value.trim();
    if (texto === '') return marcar(campo, 'Este campo es obligatorio.');
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,40}$/.test(texto)) return marcar(campo, 'Solo letras, de 2 a 40 caracteres.');
    return marcar(campo, '');
}

function validarCorreo() {
    var campo = document.getElementById('txtmail');
    var texto = campo.value.trim();
    if (texto === '') return marcar(campo, 'El correo es obligatorio.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texto)) return marcar(campo, 'Escribe un correo válido, por ejemplo: nombre@correo.com');
    return marcar(campo, '');
}

function validarTelefono() {
    var campo = document.getElementById('txttel');
    var texto = campo.value.trim();
    if (texto === '') return marcar(campo, 'El teléfono es obligatorio.');
    if (!/^[0-9]{10}$/.test(texto)) return marcar(campo, 'Deben ser 10 números, sin espacios.');
    return marcar(campo, '');
}

function validarComentarios() {
    var campo = document.getElementById('txtcom');
    var texto = campo.value.trim();
    if (texto === '') return marcar(campo, 'Escribe un comentario.');
    if (texto.length < 10) return marcar(campo, 'Escribe al menos 10 caracteres.');
    return marcar(campo, '');
}

// Función principal: revisa todos los campos. Si alguno falla, NO envía el formulario.
function validar() {
    var ok1 = validarNombre('txtnom');
    var ok2 = validarNombre('txtapp');
    var ok3 = validarCorreo();
    var ok4 = validarTelefono();
    var ok5 = validarComentarios();
    return ok1 && ok2 && ok3 && ok4 && ok5; // true = se envía al PHP
}
