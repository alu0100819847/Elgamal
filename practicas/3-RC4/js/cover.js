
function tobin(str) {
  var temp = str.toString(2);
  while(temp.length < 8){
    temp = "0" + temp;
  }
  return temp;
}

function frombin(bin) {
  return parseInt(bin, 2);
}

function tounix(str) {
  var num = [];
  for(var i = 0; i < str.length; i++){
    num[i]=str[i].charCodeAt(0)
  }
  console.log(num);
  return num;
}

function fromunix(num) {
  noImprimible.innerHTML = "";
  var sol = "";
  for(var i = 0; i < num.length ; i++) {
    if(Nimp[num[i]]==1){
      noImprimible.innerHTML = "X";
      sol = "" + sol + " ";
    }
     else {
       sol = "" + sol + String.fromCharCode(num[i]);
     }
  }
  return sol;
}
