/*var valor = 30000;
var prestacao = 750;
var entrada = 3000;*/
function obterParcelas(){

	var numeroPArcelas = 0;
    var valor = parseInt(document.getElementById("a").value);
    var prestacao = parseInt(document.getElementById("b").value);
    var entrada = parseInt(document.getElementById("c").value);

  
    let necessidade = false;
    do{
    numeroPArcelas++;
    necessidade = entrada + (prestacao * numeroPArcelas) == valor
    if((entrada + (prestacao * numeroPArcelas))>valor){
        necessidade = true;
    }

    }while( necessidade == false)

 
    document.getElementById("resultado").innerHTML = "Serão necessarias " + numeroPArcelas + " parcelas";
}