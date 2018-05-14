function verify(){
  error.innerHTML = "";
  var v = readInput();
  for(var i in v){
    if(!v[i]+"".match(/^[1-9][0-9]*$/)) {
      error.innerHTML = "Complete todos los campos con numeros";
    }
  }
  if(isPrimo(v["primo"]) == -1) {
    error.innerHTML = ""+v["primo"]+" no es un numero primo";
    return -1;
  } else {
    if(v["primo"] < v["alpha"]) {
      error.innerHTML = "α debe ser menor que el numero primo";
    }
  }


  dh()
}


function isPrimo(a){
  for(var i = 2; i < a; i++){
    if(a%i == 0) return -1;
  }
  return 0;
}
