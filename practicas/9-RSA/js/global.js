var Int = 1;
var Numb = 8;
var ABC = [];

for(var i = 0; i < 26; i++){
  ABC[String.fromCharCode(i+65)] = i;
  ABC[i] = String.fromCharCode(i+65)
}
ABC.Size= ABC.length;
