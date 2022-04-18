function validar(elemento){

    
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');
    // let valid = true;
    const emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9]+\.[a-zA-Z0-9]+(\.[a-z]+)?/i;

    if (email.value == '' ){
        elemento.preventDefault();
        alert('Email não informado');
        email.focus();
        return;
    }
    if(!email.value.match(emailValido)){
        elemento.preventDefault();
        alert('Formato de email inválido');
        email.focus();
        return;
    }
    if (mensagem.value == ''){
        elemento.preventDefault();
        alert('Campo de mensagem vazio');
        mensagem.focus();
        return;
    }
    alert('Formulário enviado!');
    

}
const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", validar);
