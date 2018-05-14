function Elgamal(){
  var v = [];
  v = readInput();

  v["Points"] = getAllP(v.a, v.b, v.p)
  printInput([v.m, v.p, v.a, v.b, v.dB, v.aA]);
  console.log(v);
  v["M"] = getM(v["m"]);
  console.log(v)
  v["sol"] = getPCode(v["Points"], v["p"], v["m"], v["M"])
  for(var i = 0; i <v["sol"].length; i++ ){
      v["sol"][i] =cifer([v["sol"][i].x, v["sol"][i].y], v["aA"], v["dB"], [v["x"], v["y"]] ,v["a"], v["b"], v["p"])
  }
  console.log(v);
  v.sol = { "x": groupVar(v.sol, 0), "y": groupVar(v.sol, 1) }
  console.log([v.sol.x, v.sol.y])
  printOutput([v.sol.x, v.sol.y])
  console.log(v);
}

function getAllP(a, b, p){ // Obtenr todos los puntos de la curva.
  var v = []
  var j = 0;

  for (var x = 0; x < p; x++){
    var y = (x**3 +a*x + b)%p;
    y = verY(p, y);
    for(var i = 0; i < y.length; i++){
      var temp = {
          "x": x,
          "y": y[i]
      }
      v[j] = temp;
      j++;

    }

  }
  console.log(v);
  return v;
}

function groupVar(v, x){ // Preparar los puntos para pintarlos.
  var s= "";
  for(var i = 0; i < v.length; i++){
    s = "" + s + "["+i+"] (" + v[i][x] + ")";
    console.log("la s: "+ s);
  }
  return s;
}


 function verY(p, y){
   var v = []
   var j = 0;
   for(var i = 0; i < p; i++){
     if(y == (i*i)%p){
       v[j] = i;
       j++;
     }
   }
   return v;
 }

function cifer(q, aA, dB, point, a, b, p){ // cifrado de los puntos.

  var pt=[point[0], point[1]];
  var sol = sumPoint(pt, pt, a, b, p);
  pt = sol;
  for(var i = 0; i < (dB/2)-1; i++){
    sol = sumPoint(sol, pt, a, b, p)
  }
  pt = sol;
  sol = sumPoint(sol, sol, a, b, p)
  pt = sol;
  for(var i = 0; i < (aA/2)-1; i++){
    sol = sumPoint(sol, pt, a, b, p)
  }

  sol = sumPoint(q, sol, a, b, p)

  pt = [point[0], point[1]];
  sol1 = sumPoint(pt, pt, a, b, p)
  pt = sol1;
  for(var i = 0; i < (aA/2)-1; i++){
    sol1 = sumPoint(sol1, pt, a, b, p)
  }
  console.log("sol x: " + sol);
  console.log("sol y: " + sol1);
  return [sol, sol1]
}

 function existX(v, x){ //devuelve el punto en el que coincida la x, con el punto y menor.
   var j = -1;

   for(var i = 0; i < v.length; i++){
     console.log("Punto: " + v[i].x);
      console.log("New: " + x);
      console.log("J: "+ j);
     if(v[i].x == x) {
       if(j == -1) j = i;
       else{
         if(v[j].y > v[i].y) j = i;
       }
     }
   }
   if(j == -1) return -1;
   else return { "x": v[j].x, "y": v[j].y}
 }

function curva(a, b, x){ //calcula el valor de un punto y dada una ecuación
  var sol = Math.sqrt(x**3 +a*x + b);
  //console.log(x + " , " + sol);
  return sol;
}

function sumPoint(p1, p2, a, b, p){ //Realiza la suma de dos puntos
  var lan = 0;
  var x = 0;
  var y = 0;
  if(p1[0] == p2[0] && p2[1] == -p1[1]) return NaN; //Si se dan estas condiciones, el resultado será infinito
  else {
    if(p1[0] == p2[0] && p1[1] == p2[1]) {
      lan = ((3*(p1[0]**2) + a)*(euclidesExt(p, 2*p1[1])))%p
      if(lan < 0) lan = lan + p;
    } else {
      lan = ((p2[1] - p1[1])*(euclidesExt(p, p2[0] - p1[0])))%p;
      if(lan < 0) lan = lan + p;
    }
    x = ((lan**2) - p1[0] - p2[0])%p;
    if(x < 0) x = x + p;
    y = (lan*(p1[0] - x) - p1[1])%p;
    if(y < 0) y = y + p;
  }
  return [x, y];
}

function euclidesExt(n,m) {
  var a = n;
  var b = m;
  var x = a;
  var x1 = b
  var z = 1;
  var z1 = 0;
  var xin = x;
  var i = 0;
  //console.log("i | x | z");
  //console.log("_________");
  //console.log(i+" | "+ x + " | " + z);
  while(x > 1){

    var tx = x%x1;
    var tz = (-parseInt(x/x1))*z +z1;
    x = x1;
    x1 = tx;
    z1 = z;
    if(x > 1) z = tz;
    //console.log(i+" | "+ x + " | " + z);
  }
  if(z < 0) z = z + xin;
  else z = z % xin;
  //console.log("x1: "+x1)
  //console.log("x: "+x)
  //console.log("z: "+z);
  if(x == 1) return z;
  return false;
}

// Devuelve una letra codificada en punto antes de cifrarlo
function getPoint(v, prim, m, m2 ){
  var p = -1;
  var j = 0;
  while(p == -1){
    p = existX(v, m*(parseInt(prim/m2)) +j);
    j++;
  }
  console.log(p);
  return p;
}

// Devuelve todo el mensaje codificado para ser cifrado
function getPCode(v, p, m, m2){
  var s = [];

  for(var i = 0; i < m.length; i++){
    s[i] = getPoint(v, p, m[i], m2[i])
    console.log(s[i]);
  }
  return s;
}

function getM(m){ //Calcular la variable M
  var v = [0];
  for(var i = 0; i < m.length; i++){
    var j = 0;
    while(2**j <= m[i]){
      j++;
    }
    v[i] = 2 ** j;
  }

  return v;
}

function parseP(str){ //Parsear un texto en busca del punto
  var v = [0]
  var j = 0
  var temp = "";
  for(var i = 0; i < str.length; i++){
    if(str[i].match(/\d/)) temp = "" + temp + str[i];
    else{
      if(str[i].match(/,/)){
        v[j] = parseInt(temp, 10);
        j++;
        temp = "";
      }
    }
  }
  v[j] = parseInt(temp, 10);
  return v;
}
function readInput(){
  var v = [];
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < html.length -1 ; i++){
    v[i] = html[i].children[0].value;
  }
  var x = parseP(v[6]);
  var r = {
    "m": parsemsj(v[0].toUpperCase()),
    "p": parseInt(v[1], 10),
    "a": parseInt(v[2], 10),
    "b": parseInt(v[3], 10),
    "dB": parseInt(v[4], 10),
    "aA": parseInt(v[5], 10),
    "x": x[0],
    "y": x[1]
  }
  return r;
}

function parsemsj(msj){
  var v = [0];
  for(var i = 0; i < msj.length; i++){
    v[i] = ABC[msj[i]];
  }
  return v;
}

function printInput(v) {
  var output = $("table[id=outDatos] td");
  for(var i = 0; i < v.length; i++){
    output[i].children[0].innerHTML = v[i];
  }
}


function printOutput(v) {
  var output = $("table[id=outDatos] td");
  for(var i = 0; i < v.length; i++){
    output[i+6].children[0].innerHTML = v[i];
  }
}
