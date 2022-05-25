function toggleform() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}

// Validacion de los datos

function validarForm__login() {
    let email = document.getElementById('email');
    let parrafo = document.getElementById('warning')
    if (!(/\S+@\S+\.\S+/.test(email))) {
        parrafo.innerHTML += `El email no es valido <br>`;
        return true;
    }

    if (pass.value.length < 8) {
        parrafo.innerHTML += `La contraseña no es valida <br>`;
        return false;
    }
}