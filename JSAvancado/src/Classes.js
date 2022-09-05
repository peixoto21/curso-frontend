class Animal {

    constructor(especie){
        this.especie= especie
    }

    falar (){
        console.log(this.especie + ' ')
    }
    comer(){
        console.log(this.especie + ' ')
    }
    dormir(){
        console.log(this.especie + ' ')
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' au au au')
    }
    comer(){
        console.log(this.especie + ' come ração')
    }
    dormir(){
        console.log(this.especie + ' dorme legal')
    }
}

const cao = new Cachorro('cachorro')

cao.falar()
cao.comer()
cao.dormir()