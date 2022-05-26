import './style.sass'
import img from './about-us.jpg'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const z = document.createElement('h1');
    z.innerHTML = "Hello world 5";
    z.classList.add('title')
    return z;
}

function imgComponent(){
    const elemImg = new Image(570,535)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imgComponent())