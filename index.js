// Obtenemos la ventana modal
var modal = document.getElementById('miModal');

// Cuando el usuario cargue la página, mostramos la ventana modal automáticamente
window.onload = function () {
    modal.style.display = "block";
}

// Cuando el usuario haga clic fuera de la ventana modal, la cerramos
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Cuando el usuario haga clic en el botón de cerrar, cerramos la ventana modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    modal.style.display = "none";
}

function closemodal() {
    modal.style.display = "none";
}

function calcularSigno() {
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;

    if (dia >= 18 && dia <= 30 && mes == 4 || dia >= 1 && dia <= 13 && mes == 5) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Aries";
    }
    else if (dia >= 14 && dia <= 31 && mes == 5 || dia >= 1 && dia <= 19 && mes == 6) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Tauro";
    }
    else if (dia >= 20 && dia <= 30 && mes == 6 || dia >= 1 && dia <= 20 && mes == 7) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Géminis";
    }
    else if (dia >= 21 && dia <= 31 && mes == 7 || dia >= 1 && dia <= 9 && mes == 8) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Cáncer";
    }
    else if (dia >= 10 && dia <= 31 && mes == 8 || dia >= 1 && dia <= 15 && mes == 9) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Leo";
    }
    else if (dia >= 16 && dia <= 30 && mes == 9 || dia >= 1 && dia <= 30 && mes == 10) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Virgo";
    }
    else if (dia == 31 && mes == 10 || dia >= 1 && dia <= 22 && mes == 11) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Libra";
    }
    else if (dia >= 23 && dia <= 29 && mes == 11) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Escorpio";
    }
    else if (dia == 30 && mes == 11 || dia >= 1 && dia <= 17 && mes == 12) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Ofiuco";
    }
    else if (dia >= 18 && dia <= 31 && mes == 12 || dia >= 1 && dia <= 18 && mes == 1) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Sagitario";
    }
    else if (dia >= 19 && dia <= 31 && mes == 1 || dia >= 1 && dia <= 15 && mes == 2) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Capricornio";
    }
    else if (dia >= 16 && dia <= 29 && mes == 2 || dia >= 1 && dia <= 11 && mes == 3) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Acuario";
    }
    else if (dia >= 12 && dia <= 31 && mes == 3 || dia >= 1 && dia <= 18 && mes == 4) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Piscis";
    }
    else if (dia >= 28 && dia <= 29 && mes == 3) {
        document.getElementById("resultado").innerHTML = "Tu signo zodiacal es Cetus";
    }
    else {
        document.getElementById("resultado").innerHTML = "Fecha de nacimiento inválida";
    }
}
