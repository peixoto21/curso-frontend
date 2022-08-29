import '../scss/styles.scss'
import imageBoxOne from '../assets/images/caixa-nova.jpg'
import imageBoxCat1 from '../assets/images/Box1.png'
import imageBoxCat2 from '../assets/images/Box2.png'
import imageBoxCat3 from '../assets/images/Box3.png'
import imageBoxCat4 from '../assets/images/Box4.png'
import imageBanner from '../assets/images/BoxKing-Banner.png'
import logoAba from '../assets/images/Logo.png'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')


const elemImageBoxOne = new Image()
elemImageBoxOne.src = imageBoxOne

const elemImageBoxcat1 = new Image()
elemImageBoxcat1.src = imageBoxCat1

const elemImageBoxcat2 = new Image()
elemImageBoxcat2.src = imageBoxCat2

const elemImageBoxcat3 = new Image()
elemImageBoxcat3.src = imageBoxCat3

const elemImageBoxcat4 = new Image()
elemImageBoxcat4.src = imageBoxCat4

const bannerimg = new Image()
bannerimg.src = imageBanner

const logoNaAba = new Image()
logoNaAba.src = logoAba

function validaEmail(email){
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}

console.log(validaEmail('v@gmail.com.br'))
var formulario = document.querySelector("form")

formulario.onsubmit = function(){
    var emailcheck = document.getElementById("email").value;
    if(validaEmail(emailcheck)){
        alert("formulário enviado!")

        return true
    }
    
    return false
}
// document.querySelector('#building')
    // .appendChild(elemImageBuilding)

// document.querySelector('#notebook')
    // .appendChild(elemImageNotebook)
document.querySelector('#localizacao')
    .appendChild(elemImageBoxOne)
 
document.querySelector('#boximg1')
    .appendChild(elemImageBoxcat1)  
document.querySelector('#boximg2')
    .appendChild(elemImageBoxcat2) 
document.querySelector('#boximg3')
    .appendChild(elemImageBoxcat3) 
document.querySelector('#boximg4')
    .appendChild(elemImageBoxcat4)   
 
document.querySelector('.bannerplace')
    .appendChild(bannerimg)    

document.querySelector('#logo')
    .appendChild(logoNaAba)    