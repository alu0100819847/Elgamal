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
    html[i].children[0].value = "";;
  }
  for(var i = 0; i < output.length; i++) {
    output[i].children[0].innerHTML = "";
  }
}


function drawExampleMain(){
  var example = [
                  ["Mensaje: ", "p: ", "q: ", "d: "],
                  ["MANDA DINEROS", "421", "7", "1619"],
                  ["AMIGO MIO", "2347", "347", "5"],
                  ["", "61", "53", "2753"],
                  ["", "885320963", "238855417", "116402471153538991"]

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
