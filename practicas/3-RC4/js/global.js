var Int = 1;
var Numb = 2;
var S = [];
var Nimp = [];
function rein() {
  for(var i = 0; i < 256; i++){
    S[i] = i;
  }
}

function iniNoImp() {

  for(var i = 0; i < 256; i++){
    Nimp[i] = 0;
  }
  for(var i = 0; i < 32; i++){
    Nimp[i] = 1;
  }

  for(var i = 127; i < 161; i++){
    Nimp[i] = 1;
  }
  Nimp[173] = 1;
}

iniNoImp();
rein();
