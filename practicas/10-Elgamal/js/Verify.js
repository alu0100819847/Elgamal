function verify(op){

  error.innerHTML = "";
  var v = readInput();
  for(var i in v){
    console.log(i)
    if(!v[i]+"".match(/^[1-9][0-9]*$/)) {
      //if(i != "msj") error.innerHTML = "Complete todos los campos con numeros";
      error.innerHTML = "Complete todos los campos con numeros";
      return -1

    }


  }

  Elgamal();
}


function isPrimo(a){
  for(var i = 2; i < a; i++){
    if(a%i == 0) return -1;
  }
  return 0;
}
