window.onload = function() {
   var rand = Math.floor(Math.random()*100);
   document.getElementById("aleatorio").innerText = "Numero aleatorio: "+rand;
   
   var ajax= new XMLHttpRequest();
   ajax.onreadystatechange = new function() {
    if (this.readystate==4 && this.status==200) {
            document.getElementById("mensaje").innerText = this.responseText;
        }
    }
   ajax.open("GET", "./Hello",true);//Esto es un cambio cualquiera
   ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  ajax.send();
}

function actualizarMensaje(){
    alert("Cambiaste el estudiante");
}