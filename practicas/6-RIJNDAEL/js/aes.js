
function aes(){
  var v= readIntro()
  console.log(v);
  var str = v[0];
  var k = v[1];
   str = vectorize(str);
   k = vectorize(k);

   ark(str, k);
}

function ark(str, k){
  var v = [];
  for(var i = 0; i < str.length; i++){
    var fila = [];
    for(var j = 0; j < str[i].length; j=j+2){
      fila[fila.length] = tobin(""+str[i][j] + str[i][j+1])
    }
    v[v.length] = fila;
  }
  console.log(v);
  return v;
}

function readIntro(){
  var v = [];
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < html.length -1 ; i++){
    v[i] = html[i].children[0].value;
  }

  return v;
}

function vectorize(str) {
  var m=["", "", "", ""]; // [fila][columna]
  var x = 0;
  for(var i=0; i<str.length; i++){
    m[x] = "" + m[x] + str[i];
    if(x < 3) {
      x++;
    } else {
      x = 0;
    }
  }
  console.log(m);
  return m;
}

function tobin(hex){
  console.log("Salida: "+ hex);
  var temp = "";
  for(var i = 0; i < 2; i++) {
    var dummy = "";
    for(var j = 0; j < 4; j++){
      dummy = HEX[hex[i]].toString(2);
      while(dummy.length < 4){
        dummy = "0" + dummy;
      }
    }
    temp = "" + temp + dummy;
  }
  return temp;
}
