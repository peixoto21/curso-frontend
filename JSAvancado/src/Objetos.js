const user01 = new Object()

user01.id = 1
user01.nome = "João"
user01.idade = 25
user01.cpf = '0'

const user02 = new Object()

user02.id = 2
user02.nome = "Pedro"
user02.idade = 29

const user03 = new Object()

user03.id = 3
user03.nome = "Maria"
user03.idade = 35

const car01 = new Object()
car01["marca"] = "fiat"

const car02 = new Object()
car02.marca = "ford"

// console.log(Object.keys(user01))
// console.log(Object.values(user01))
console.log(Object.entries(user01))

// user01.idade = user01.idade +1

// console.log(Object.entries(user01))



Object.defineProperty(user01, 'cpf', {writable:false,value:'000.000.000-00'})

user01.cpf = '111.111.111-11'

console.log(user01)