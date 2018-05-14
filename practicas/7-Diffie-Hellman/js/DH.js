function dh(){
  var v = readInput();
  console.log(v);
  printInput([v["primo"], v["alpha"], v["xa"], v["xb"]]);

  var ya = fastExp(v["primo"], v["xa"], v["alpha"])
  var yb = fastExp(v["primo"], v["xb"], v["alpha"])

  var ka = fastExp(v["primo"], v["xa"], yb)
  var kb = fastExp(v["primo"], v["xb"], ya)
  printOutput([ya, yb, ka, kb]);

/*
for(var i in v ){
  console.log(v[i] + 1);
}
*/
}


function fastExp(p, val, alph){
  var a = alph;
  var b = val;
  var y = a % p;
  var x = 1;
  console.log("Alph: "+a);
  console.log("Y  |  b  |  X");
  console.log(y + "  |  " +val+ "  |  "+ x );
  while(val > 0 ){
    if(val % 2 == 0) {
      val = val/2;
      //console.log("y: "+ y + "  a: " + a + "   ::::"+ y**a);
      y = (y**2)%p;

    } else {
      val = val-1;
      x = (x * y)%p;
    }
    console.log(y + "  |  " +val+ "  |  "+ x );
  }
  console.log(x);
  return x;
}



function readInput(){
  var v = [];
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < html.length -1 ; i++){
    v[i] = html[i].children[0].value;
  }
  var r = {
    "xa": parseInt(v[2], 10),
    "xb": parseInt(v[3], 10),
    "alpha": parseInt(v[1], 10),
    "primo": parseInt(v[0], 10)
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
    output[i+4].children[0].innerHTML = v[i];
  }
}
