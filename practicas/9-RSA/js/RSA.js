
function rsa(){

  error.innerHTML = "";
  var v = readInput(); //lectura
  v.n = v.p * v.q;     //Asignacion n
  v.f = (v.p-1)*(v.q-1);//Asignación φ(n)
  console.log(v);
  if(primTest(v.p) == -1 || primTest(v.q) == -1 ){ // Si uno de los dos no es primo, return -1

    printInput([v.msj, v.p, v.q, v.d, v.n, v.f, "", ""]) //Pintamos resultados
    error.innerHTML = "p o q no primo.";
    return -1;
  } else {
    v.e = euclidesExt(v.f, v.d) //Calculamos e mediante euclides extendido
    if(v.e) {
      v.sz = sizeBlock(v.n); //Hallamos el tamaño del bloque
      v.sol = block(noSpace(v.msj), v.sz) //Quitamos los espacios y dividimos en bloques
      //console.log(v.sol);
      for(var i = 0; i < v.sol.length; i++){ //Para cada bloque
        v.sol[i] = fastExp(v.n, v.e, v.sol[i]); //Hacemos exponienciación rapida para realizar el cifrado
      }

      printInput([v.msj, v.p, v.q, v.d, v.n, v.f, v.e, ""])
      printOutput([v.sol]);
      //console.log(v.sol);
    } else {
      printInput([v.msj,v.p, v.q, v.d, v.n, v.f, "", ""])
      return -1;
    }
  }

}

function rsaDescf(){

  var v = readInput();
  v.n = v.p * v.q;
  v.f = (v.p-1)*(v.q-1);
  //console.log(v);
  if(primTest(v.p) == -1 || primTest(v.q) == -1 ){
    //console.log("Res: -1");
    printInput([v.msj, v.p, v.q, v.d, v.n, v.f, ""])
    return -1;
  } else {
      v.sol= parseMsj(v.msj);
      //console.log("El emnsaje : "+v.sol);
      for(var i = 0; i < v.sol.length; i++){
        v.sol[i] = fastExp(v.n, v.d, v.sol[i]);
      }

      printInput([v.msj, v.p, v.q, v.d, v.n, v.f, v.e])
      printOutput([v.sol]);
      console.log(v.sol);
  }
}

function primTest(num) {
  var v = [];
  v[1] = false;
  v[num-1] = false;
  var prim = [2, 3, 5, 7, 11];
  for(var i = 0; i < prim.length; i++){
    //console.log("Primo: " + prim[i]);
    if(num%prim[i] == 0 && num != prim[i]) return -1;

  }
  //console.log("Paso 1");
  for(var i = 3; i < num-1; i++){
    var temp = fastExp(num, (num-1)/2, i);
    v[temp] = true;
    //console.log("temp: "+temp)
    //console.log("p: "+num)
    if(temp != 1 && temp != num-1) return -1;
  }
  if(v[1] != true || v[num-1]!= true) return -1;
  //console.log("Este es my temp: ");
  //console.log(v);
  //console.log("Paso 2");
}

function euclidesExt(n,m) {
  var a = n;
  var b = m;
  var x = a;
  var x1 = b
  var z = 1;
  var z1 = 0;
  if(a < b){
    x1 = a;
    x = b;
  }
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

function fastExp(p, val, alph){
  var a = alph;
  var b = val;
  var y = a % p;
  var x = 1;/*
  console.log("Alph: "+a);
  console.log("Y  |  b  |  X");
  console.log(y + "  |  " +val+ "  |  "+ x );*/
  while(val > 0 ){
    if(val % 2 == 0) {
      val = val/2;
      //console.log("y: "+ y + "  a: " + a + "   ::::"+ y**a);
      y = (y**2)%p;

    } else {
      val = val-1;
      x = (x * y)%p;
    }
    //console.log(y + "  |  " +val+ "  |  "+ x );
  }
  //console.log(x);
  return x;
}

function sizeBlock(n){

 return parseInt(Math.log(n)/Math.log(26));

}

function block(msj, size){
  msj = msj.toUpperCase();
  var lnt = 0;
  var blk = [0];
  var j = 0;
      //console.log("blk[0]: "+blk[lnt]);
      //console.log("---------Iteracion: "+ lnt + "------------")
  for (var i = 0; i < msj.length; i++){

    if(j == size){
      lnt++;
      j = 0;
      //console.log("---------Iteracion: "+ lnt + "------------")

      var s = size-1-j;
      var w = ABC[msj[i]]

      //console.log("W: "+ w);
      //console.log("S: "+ s);

      //console.log("Mult: "+ 26**((size-1)-j));
      blk[lnt] = w*(ABC.Size**s);

      //console.log("blk[0]: "+blk[lnt]);
      j++;
    } else {
      var s = size-1-j;
      var w = ABC[msj[i]]
      //console.log("W: "+ w);
      //console.log("S: "+ s);
      //console.log("j: "+ j);
      //console.log("Mult: "+ ABC.Size**s);
      blk[lnt] = blk[lnt] + w*(ABC.Size**s);
      j++;
    }
  }
  console.log(blk);
  return blk;
}

function encode(num, e, n) {
  var res = []/*
  console.log("num: " + num)
  console.log("e: " + e)
  console.log("n: " + n)*/
  for(var i = 0; i < num.length; i++){
    console.log(fastExp(n, e, num[i]));
    res[i] = fastExp(n, e, num[i]);
  }

  return res;
}

function noSpace(str) {
  var msj = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] != " ") msj = "" + msj + str[i];
  }
  console.log(msj);
  return msj;
}

function parseMsj(str){
  var v = [];
  var j = 0;
  var temp = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] == ","){
      v[j] = parseInt(temp);
      j++;
      temp = "";
    } else {
      temp = ""+ temp + str[i];
    }
  }
  v[j] = parseInt(temp);
  console.log("El mensaje es: "+v);
  return v;
}

function readInput(){
  var v = [];
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < html.length -1 ; i++){
    v[i] = html[i].children[0].value;
  }
  var r = {
    "msj": v[0].toUpperCase(),
    "p": parseInt(v[1], 10),
    "q": parseInt(v[2], 10),
    "d": parseInt(v[3], 10)
  }
  return r;
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
    output[i+7].children[0].innerHTML = v[i];
  }
}
