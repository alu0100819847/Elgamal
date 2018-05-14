function verify(str, key){
  if(str.length != 0){
    console.log("str length ok");
    if(key.length != 0) {
      console.log("key length ok");

      if(str.match(/^([A-Z]*(\s)*)*$/)) {
        console.log("palabra " +str+ " válida.");
        error.innerHTML = "";
      } else {
        console.log("no es valido");
        error.innerHTML = "Mensaje Inválido."
        intro.innerHTML = str;
        clave.innerHTML = key;
        salida.innerHTML = "";
        return false;
      }
      if(key.match(/\s/)) {
        error.innerHTML = "Espacios no válidos en la clave."
        intro.innerHTML = str;
        clave.innerHTML = key;
        salida.innerHTML = "";
        return false;
      }
    } else {
      error.innerHTML = "Introduce una clave."
      intro.innerHTML = str;
      clave.innerHTML = key;
      salida.innerHTML = "";
      return false;
    }
  } else {
      error.innerHTML = "Introduce un mensaje."
      intro.innerHTML = str;
      clave.innerHTML = key;
      salida.innerHTML = "";
      return false;
  }
  return true;

}
