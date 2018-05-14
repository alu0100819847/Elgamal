var Int = 1;
var Numb = 3;
P = [];
HEX = [];

for(var i = 0; i< 16; i++){
  var temp = (i.toString(16)).toUpperCase();
  HEX[i] = temp;
  HEX[temp] = i;
}
console.log(HEX);
