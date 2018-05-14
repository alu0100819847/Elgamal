
function Generador(){
  var r = [];
  var sol = "";
  var salida = "";

  r = readIntro();

  var r1 = "" + r["r1"];

  printIntro([r["r"], r["r1"], r["n"] ]);

  if(r["ty"] == 1) r["r"] = invertirKeys(r["r"]);
  for(var j = 0; j < r["n"]; j++) {
  /*  console.log("R10 -> "+ r1);
    console.log("Salida -> " + salida);*/
    var s = [];
    for(var i = 0; i < 4; i++) {
      s[i] = strtobin[r["r"][i][0]];
      r["r"][i] = LSFR(i, r["r"][i]);
    /*  console.log("Sale: "+s[i])
      console.log("Queda: "+r["r"][i]);*/
    }
    //console.log(s);
    sol = suma(s) + parseInt(boxR(r1), 2);

    salida ="" + gxor(group(group(s, boxR(r1)[1]), r["r"][4][0])) + salida;
    r["r"][4] = LSFR(4, r["r"][4]);
    var r2 = boxR(r1);
    var t1 = boxR(r1);
    var t2 = boxR(r2);
    /*
    console.log("Entrada r1 -> "+r1);
    console.log("Salida r1 -> "+boxR(r1));
    console.log("Entrada r2 -> "+r2);
    console.log("Salida r2 -> "+boxR(r2));
    console.log("Entrada t1 -> "+t1);
    console.log("Salida t1 -> "+ft1(t1));
    console.log("Entrada t2 -> "+t2);
    console.log("Salida t2 -> "+ft2(t2));
    console.log("sol -> "+sol);
    */

    sol = mod2(sol.toString(2));
    sol = txor(sol, ft2(t2));
    sol = txor(sol, ft1(t1));

    r1 = sol;
  }
  printOutput(salida);
  //console.log("Salida -> " + salida);
}

function LSFR(registro, key) {
  var sum = 0;
  for(var i = 0; i < Registros[Registros[registro]].length; i++){
    sum = xor(sum, key[Registros[Registros[registro]][i]])
  }
  return realimentar(sum, key);
}

function realimentar(sum, key) {
  var str = "";
  for(var i = 1; i < key.length; i++) {
    str = "" + str + key[i];
  }
  str = "" + str + sum;
  return str;
}
function ft1(c) {
  return c;
}

function ft2(c) {
  var s = [];

  s[0] = c[1];
  s[1] = xor(c[0], c[1]);
  return s;
}
function txor(a, b){
  var sol = "";
  if(a.length == b.length) {
    for (var i = 0; i < a.length; i++) {
      if(a[i] == b[i]) sol = sol + "0";
      else sol = sol + "1";
    }
  } else {
    //console.log("Xor con elementos de distinto tamaño");
  }
  return sol;
}

function xor(a, b) {
  if(a == b) return 0
  else return 1;
}

function gxor(a) {
  sol = 0;
  for( var i = 0; i < a.length; i++ ){
    sol = xor(sol, a[i]);
  }
  return sol;
}
function suma(v) {
  var s = 0;
  for(var i=0; i< v.length; i++) {
    s = v[i] + s
  }
  return s;
}

function mod2(bin) {
  return ""+bin[0]+bin[1];
}

function boxR(bin) {
  return "" + bin[1] + bin[0];
}

function group(a, b) {
  var sol = "";
  for(var i = 0; i < a.length ; i++){
    sol = "" + a[i] + sol;
  }
  sol ="" + b + sol;
  //console.log("Group -> "+sol);
  return sol;
}

function printIntro(v) {
  //console.log(v);
  var output = $("table[id=outDatos] td");
  for(var i = 0; i < v[0].length; i++){
    output[i].children[0].innerHTML = v[0][i];
  }
  for(var i = 1; i < v.length; i++){
    output[i+v[0].length - 1].children[0].innerHTML = v[i];
    //console.log("lol"+v[i]);
  }
}
function printOutput(sol){
  var output = $("table[id=outDatos] td");
  output[output.length -1].children[0].innerHTML = invertirSol(sol);
}

function readIntro(){
  var v = [];
  var r = [];
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < html.length -1 ; i++){
    v[i] = html[i].children[0].value;
  }
  r["r"] = [v[0], v[1], v[2], v[3], v[4]]
  r["r1"] = v[5];
  r["n"] = v[6];
  r["ty"] = v[7];
  //console.log(r);
  console.log(r["r"]);
  return r;
}

function invertirKeys(v){
  var s = []
  for(var i = 0; i < v.length; i++) {
    var temp = "";
    for(var j = v[i].length -1; j >= 0 ; j--){
      temp = "" + temp + v[i][j];
    }
    s[i] = temp;
  }
  console.log(s);
  return s;
}

function invertirSol(str){
  var temp = "";
  for(var i = 0; i < str.length; i++){
    temp = "" +str[i]+ temp;
  }
  return temp;
}
