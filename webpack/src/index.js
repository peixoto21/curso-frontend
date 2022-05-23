import './style.sass'
import img from './about-us.jpg'

function titleComponent(){
    const z = document.createElement('h1');
    z.innerHTML = "Hello world";
    z.classList.add('title')
    return z;
}

function imgComponent(){
    const elemImg = new Image(570,535)
    elemImg.src = img
    return elemImg
}

document.body.appendChild(titleComponent())
document.body.appendChild(imgComponent())