
function rc4(){
  noImprimible.innerHTML = "";
  rein();
  var str = original.value;
  var key = Clave.value;
  intro.innerHTML = str;
  clave.innerHTML = key;
  var msj = tounix(str);
  var k = tounix(key);
  introNum.innerHTML = msj;
  claveNum.innerHTML = k;


  iniVeEstado(k);
  var sol = secCifr(msj)
  salidaNum.innerHTML = sol;
  salida.innerHTML = fromunix(sol);
}

function getSTR(str){
  var j = 0;
  var msj = [];
  msj[0] = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] != ","){
      msj[j] = "" + msj[j] + str[i];

    } else {
      j++;
      msj[j] = "";
    }
  }
  /*
  var int = "";
  for(var i = 0; i < msj.length; i++){
    if(i == 0) int = "" + msj[i];
    else int = "" + int + ", " + msj[i];
  }
*/
  return msj;
}

function getKEY(key){
  var j = 0;
  var k = [];
  k[0] = "";
  for(var i = 0; i < key.length; i++){
    if(key[i] != ","){
      k[j] = "" + k[j] + key[i];

    } else {
      j++;
      k[j] = "";
    }

  }
  var sol = [];
  for(var i = 0; i < k.length; i++){
    sol[i] = parseInt(k[i]);
  }
return sol;
}

function iniVeEstado(k){
  var j = 0;
  for(var i = 0; i < 256; i++){
    j = (j + S[i] + k[i%k.length])%256;
    cambio(i, j);
  }
}

function secCifr(str){
  var i = 0;
  var j = 0;
  var sol =[];
  for(var z = 0; z < str.length; z++) {

    i = (i + 1)%256;
    j = (j + S[i])%256;

    cambio(i, j);
    var t = (S[i] + S[j])%256;
    sol[z] = frombin(xor(tobin(S[t]), tobin(parseInt(str[z]))));
  }
  return sol;
}
function xor(str1, str2) {
  var sol = ""
  for(var i = 0; i < 8; i++ ){
    if(str1[i] == str2[i]) sol = "" + sol + "0";
    else sol = "" + sol + "1";
  }
  return sol;
}

function cambio(i, j){
  var temp = S[i];
  S[i] = S[j];
  S[j] = temp;
}
