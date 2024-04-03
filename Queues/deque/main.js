const logSeparator = require('../../logSeparator')

//importando o deque
const Deque = require('./Deque')


// criando deque

const deque = new Deque()


// adicionando elemento na frente do deque
logSeparator('adicionando elemento na frente do deque')

console.log(deque)

deque.addFront(1)
deque.addFront(2)
deque.addFront(3)
console.log(deque)

// adicionando elemento no final do deque
logSeparator('adicionando elemento no final do deque')

console.log(deque)

deque.addBack(1)
deque.addBack(2)
deque.addBack(3)
console.log(deque)

// removendo primeiro elemento do deque
logSeparator('removendo primeiro elemento do deque')
console.log(deque)

console.log('Elemento removido: '+deque.removeFront())
console.log('Elemento removido: '+deque.removeFront())
console.log('Elemento removido: '+deque.removeFront())

console.log('Tamanho atual: '+deque.size())

// removendo ultimo elemento do deque
logSeparator('removendo ultimo elemento do deque')
console.log(deque)

console.log('Elemento removido: '+deque.removeBack())
console.log('Tamanho atual: '+deque.size())
console.log(deque)

// acessando primeiro elemento do deque
logSeparator('acessando primeiro elemento do deque')
console.log(deque)

console.log(deque.peekFront())

// acessando ultimo elemento do deque
logSeparator('acessando ultimo elemento do deque')
console.log(deque)

console.log(deque.peekBack())

// limpando o deque
logSeparator('limpando o deque')
console.log(deque)

deque.clear()
console.log(deque)

//verificando se o deque esta vazio
logSeparator('verificando se o deque esta vazio')
console.log(deque)


console.log(deque.isEmpty())

// testando metodo toString
logSeparator('testando metodo toString')
console.log(deque)

deque.addBack(1)
deque.addBack(2)
deque.addBack(3)
deque.addFront(4)

console.log(deque.toSring())



