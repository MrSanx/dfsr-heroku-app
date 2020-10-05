window.onload = function () {
    var rand = Math.floor(Math.random() * 100);
    document.getElementById("aleatorio").innerText = "Numero aleatorio: " + rand;

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = new function () {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("mensaje").innerText = this.responseText;
        }
    }
    ajax.open("GET", "./Hello", true);//Esto es un cambio cualquiera
    ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    ajax.send();
}

function actualizarMensaje() {
    //Alerta de cambio
    alert("Cambiaste de miembro.");
    //Variable de comodidad
    var x = document.getElementById("selected");
    var i = x.selectedIndex;
    //Variables de mensaje
    var nombre = x.options[i].text;
    var id = x.options.selectedIndex + 1;
    var categoria = "";
    if (id == 1) {
        categoria = "profesor"
    } else {
        categoria = "estudiante"
    }
    //Mensaje
    document.getElementById("mensaje").innerText = ("Bienvenido " + categoria + " " + nombre + " con ID 0" + id + " , esperemos que tenga usted un buen día.");
}