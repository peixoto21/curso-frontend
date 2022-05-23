import './style.sass'

function titleComponent(){
    const z = document.createElement('h1');
    z.innerHTML = "Hello world";
    z.classList.add('title')
    return z;
}

document.body.appendChild(titleComponent())