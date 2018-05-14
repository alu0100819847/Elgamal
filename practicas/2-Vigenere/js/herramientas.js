function copia(){

  Clave.value = k1.innerHTML;
  original.value = m1.innerHTML;
}

function clean(){
  Clave.value= "";
  original.value = "";
}

function tpressKey(mk){
  if(mk.keyCode == 13){
    Vigenere();
  }
}

function fpressKey(mk){
  if(mk.keyCode == 13){
    fromVigenere();
  }
}
