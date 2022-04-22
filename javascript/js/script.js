function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');
const formulario2 = document.getElementById('formulario-02');

if (formulario1)
    formulario1.addEventListener('submit', function (evento) {

        evento.preventDefault();
        evento.stopPropagation();

        if (this.getAttribute('class').match(/erro/)) {
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        if (this.value == "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        // const numeroValido = /^[0-9]*$/; 
        // const digitosInvalidos = e;

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if (numero != "" && numero.match(/[0-9]*/) && numero >= 0) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9]+\.[a-zA-Z0-9]+(\.[a-z]+)?/i;

        if (emailValido != "" && this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaCampoUf(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const ufValido = /^[a-zA-Z]+[a-zA-Z]/;

        if (this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    }
    )
};

function validaCampoCidade(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const ufValido = /^[0-9]/;

        if (!this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        }
        else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');

            return false;
        }

    }
    )
};

// function validaErro(elemento){
//     elemento.addEventListener('focusout', function(event) {

//         event.preventDefault();



// })

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf')
let camposCidade = document.querySelectorAll('input.cidade')
let campoErro = document.querySelectorAll('input.erro');


for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposUf) {
    validaCampoUf(emFoco);
}

for (let emFoco of camposCidade) {
    validaCampoCidade(emFoco);
}

function checkInputs(inputs) {
    var filled = true;

    inputs.forEach(function (input) {

        if (input.value === "") {
            filled = false;
        }

    });

    return filled;

}

let camposTodos = formulario2.querySelector('.error')

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function (input) {

    input.addEventListener("focusout", function () {



        if (checkInputs(inputs) && !formulario2.children[1].classList.contains('erro') && !formulario2.children[2].classList.contains('erro') && !formulario2.children[3].classList.contains('erro') && !formulario2.children[4].classList.contains('erro') && !formulario2.children[5].classList.contains('erro') && !formulario2.children[6].classList.contains('erro')) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});
