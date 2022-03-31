var valor = 30000;
var prestacao = 750;
var entrada = 3000;
var numeroPArcelas = 0;
let necessidade = false;
do{
    numeroPArcelas++;
    necessidade = entrada + (prestacao * numeroPArcelas) == valor
    console.log(numeroPArcelas)
}while( necessidade == false)


