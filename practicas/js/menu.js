
function myMenu(){
  var menu = ["practicas/1-Vernam/Vernam.html", "practicas/2-Vigenere/Vigenere.html", "practicas/3-RC4/RC4.html", "practicas/4-Mult/Multiplicador.html", "practicas/5-E0-Bluetooth/Generador.html", "practicas/6-RIJNDAEL/RIJNDAEL.html", "practicas/7-Diffie-Hellman/DH.html", "practicas/8-Seguridad/TT.html", "practicas/9-RSA/RSA.html", "practicas/10-Elgamal/Elgamal.html"]
  var name = ["Prac 1", "Prac 2", "Prac 3", "Prac 4", "Prac 5", "Prac 6", "Prac 7", "Prac 8", "Prac 9", "Opcional"]
  var frontMenu = ["Practica 1: Vernam", "Practica 2: Vigenere", "Practica 3: RC4", "Práctica 4: Multiplicador(AES, SNOW)", "Práctica 5: Generador E0 de Bluetooth", "<strike>Práctica 6: RIJNDAEL (AES)</strike>", "Práctica 7: Diffie-Hellman", "Práctica 8: Tutorizada", "Práctica 9: RSA", "Opcional: CIFRADO ELGAMAL ELÍPTICO"];
  for(var i = 0; i < menu.length; i++){
    if(menu[i] != ""){
      crearEntradaMenu(menu[i], name[i], i, frontMenu[i]);
    }
  }
}

function crearEntradaMenu(entrada, text, n, front){
  if(Int != 0){
     entrada = "../../" + entrada;
     if(Numb == n){
       $("ul[id = Menu] li:last").after('<li class="active"><a href="'+entrada+'">'+text+'</a></li>');
     } else {
       $("ul[id = Menu] li:last").after('<li class=""><a href="'+entrada+'">'+text+'</a></li>');
     }
  }
  else {
        $("ul[id = Menu] li:last").after('<li class=""><a href="'+entrada+'">'+text+'</a></li>');
        $("div[id = frontMenu] a:last").after('<a href= "'+entrada+'"><h3 class = "entradas"><li>'+front+'</li></h3></a>');
  }
}

myMenu();
