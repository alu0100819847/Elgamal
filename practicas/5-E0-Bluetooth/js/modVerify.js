function verifica(){
  error.innerHTML = "";
  var siz = [25, 31, 33, 39, 39];
  var v = readIntro();
  if(keyOk(v["r"], siz) == -1) return -1;
  console.log(v["r1"])
  if(semillaOk(v["r1"]) == -1) return -1;
  if(!v["n"].match(/^[1-9][0-9]*$/)){
    error.innerHTML = "Los bits de salida debe ser un entero positivo"
    return -1;
  }
  Generador();
  return 0;
}

function keyOk(k, n){
  for(var i = 0; i < k.length; i++){
    if(k[i].length != n[i]){
      error.innerHTML = "La clave "+(i+1)+" debe tener tamaño " + n[i];
      //console.log(k[i].length);
      return -1
    } else {
      if(allBin(k[i]) == -1) return -1;
    }
  }
  return 0;
}

function semillaOk(s){
  if(allBin(s) == -1) return -1
  else {
    if(s.length != 2){
      error.innerHTML= "La semilla de R1 debe tener tamaño 2";
      return -1
    }
  }

}

function allBin(el){
  if(!el.match(/^[01]*$/))
  {
    error.innerHTML = "Las claves y semillas deben estar en binario";
    return -1
  } else {
    return 0;
  }
}
