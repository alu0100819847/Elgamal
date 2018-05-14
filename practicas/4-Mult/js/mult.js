
function mult() {
  var x = (""+x1.value).toUpperCase();
  var y = (""+x2.value).toUpperCase();
  var p = Polinomio.value;
  entrada1.innerHTML = x;
  entrada2.innerHTML = y;


  x = tobin(x);
  y = tobin(y);
  p = P[p];
  pol.innerHTML = p;
  bin1.innerHTML = x;
  bin2.innerHTML = y;
  var vec = iterar(x, y, p);
  Res.innerHTML = finalxor(vec);
}

function tobin(num){
  //console.log("num " + num)
  var sol = "";
  for (var i = 0; i < 2; i++){
    var temo=HEX[num[i]];
    //console.log("pintando temo"+temo);
    var bin = temo.toString(2);
    while(bin.length < 4){
      bin = "0" + bin;
    }
    sol = "" + sol +bin
    //console.log(sol);
  }
  return sol;
}

function iterar(x, y, p){
  var sol = []
  var isol = 0;
  var ix = 0;
  var iy = 0;
  for(var i = 0; i < 8; i++){
    if(x[i] == 1) ix++;
  }
  for(var i = 0; i < 8; i++){
    if(y[i] == 1) iy++;
  }
  if(ix < iy) {
    for(var i = 0; i < 8; i++){
      if(x[i]==1){
        sol[sol.length]=operar(7-i, y, p)
      }
    }
  } else {
    for(var i = 0; i < 8; i++){
      if(y[i]==1){
        sol[sol.length]=operar(7-i, x, p)
      }
    }
  }
  return sol;
}

function operar(num, x, p) {
  console.log("I:0 -> "+x)
  for(var i = 0; i < num; i++){
    var op = x[0];
    x = desplazar(x);
    if(op == 1){
      x = xor(x, p);
    }
    console.log("I:"+(i+1) + " -> "+ x);
  }
  return x;
}

function desplazar(x) {
  var sol = "";
  for(var i = 0; i < 7; i++){
    sol = ""+sol+x[i+1];
  }
  sol= ""+sol+"0";
  return sol;
}

function xor(b1, b2){
  var sol = "";
  for(var i = 0; i < 8; i++){
    if(b1[i] == b2[i]) sol = "" + sol + "0";
    else sol = "" + sol + "1";
  }
  return sol;
}

function finalxor(vec) {
  var sol = vec[0];
  console.log(vec);
  for(var i = 1; i < vec.length; i++){
    //console.log(i+": "+vec[i]);
    sol = xor(sol, vec[i]);
    //console.log(sol);
  }
  console.log("Mi solucion final:"+sol);
  return sol;
}
