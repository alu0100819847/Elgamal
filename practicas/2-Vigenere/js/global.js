var Int = 1;
var Numb = 1;
var num = [];
var K = "";
var I = "";
for(var i = 0; i < 26; i++){
  num[String.fromCharCode(i+65)] = i;
  num[i] = String.fromCharCode(i+65)
}
 console.log(num);
