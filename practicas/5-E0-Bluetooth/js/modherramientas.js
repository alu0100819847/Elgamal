function copia(n){
  var copy = $("table[id=Ejemplo"+n+"] td");
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < copy.length; i++) {
    html[i].children[0].value = copy[i].textContent;
  }
}

function clean(){
  var html = $("table[id=introDatos] td");
  var output = $("table[id=outDatos] td");
  for(var i = 0; i < html.length; i++) {
    html[i].children[0].value = "";
    output[i].children[0].innerHTML = "";
  }
}

function drawExampleMain(){
  var example = [
                  ["Key 1: ", "Key 2: ", "Key 3: ", "Key 4: ", "Key 5: ", "Semilla R1: ", "Bits de salida: "],
                  ["1111111111111111111111110", "1111111111111111111111111111110", "111111111111111111111111111111110", "010101010101010101010101010101010101010","111111111111111111111111111111111111111", "01", "4"],
                  ["0111111111111111111111111", "0111111111111111111111111111111", "011111111111111111111111111111111", "010101010101010101010101010101010101010","111111111111111111111111111111111111111", "01", "4"],
                  ["1111111111111111111111110", "1111111111111111111111111111110", "111111111111111111111111111111110", "010101010101010101010101010101010101010","111111111111111111111111111111111111111", "11", "7"]
                ];
  for(var i = 1; i < example.length; i++){
    var html = '<div class= resultados> <table id = "Ejemplo'+i+'">';
    html = html +' <tr><th><h2>Ejemplo '+i+': </h2></th></tr> ';
    for(var j = 0; j< example[0].length; j++){
      html ='' + html + ' <tr><th>'+example[0][j]+'</th><td>'+example[i][j]+'</td></tr>';
    }
    var boton = '  <tr><th></th><td><button class="boton3" onClick="copia('+i+')">Copy</button></td></tr>';
    html = html+boton+ '</table> </div>';
    //console.log(html);
    $("div[id=Ejemplos] div:last").after(html);
  }

}
drawExampleMain();
