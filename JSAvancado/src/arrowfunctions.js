function Pessoa() {

    // const pessoa = this
    // ao inves de ter que setar o valor de uma variavel para o this podemos usar => para as funções usarem o this que foi instanciado nelas mesmas
    this.idade = 0
    setInterval(() =>{
        console.log(this.idade++)
    }, 2000);
}


const p1 = new Pessoa()

// Arrow function

// (parametro1, parametro2, ...(spread operator/recebe qualquer parametro)) => {o que vai ser executado/execução}
//  pode passar um parametro unico parametro1 => expressão/execução
// pode também ser passado pra uma expressão unica (p1, p2) => expressão/execução