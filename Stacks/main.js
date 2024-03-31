const {logSeparator} = require('../logSeparator.js')
// importando a stack implementada
const { StackArray, StackObject } = require('./Stack.js')

// crianda stack
const stack = new StackArray()

// adicionando elementos
logSeparator('adicionando elementos na stack')

console.log(stack)

stack.push(1)
console.log(stack)

stack.push(2,3,4,5) 
console.log(stack)

// removendo elementos da stack
logSeparator('removendo elementos na stack')

console.log(stack)

const itemExcluded = stack.pop()
console.log("item removido: "+itemExcluded)

console.log(stack)

// acessando elemento do topo da stack
logSeparator('acessando elemento do topo da stack')

console.log(stack)

const lastItem = stack.peek()
console.log(lastItem)


// verificando se a stack esta vazia
logSeparator('verificando se a stack esta vazia')

console.log(stack)
console.log(stack.isEmpty())

stack.pop()
stack.pop()
stack.pop()
stack.pop()


console.log(stack)
console.log(stack.isEmpty())


// removendo todos os elementos da stack
logSeparator('removendo todos os elementos da stack')

console.log(stack)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)

stack.clear()
console.log(stack)


// acessando a quantidade de elementos contidos na stack
logSeparator('acessando a quantidade de elementos contidos na stack')

console.log(stack)
console.log('Quantidade de elementos: '+stack.size())

stack.push(1)
stack.push(1)
stack.push(1)
console.log(stack)
console.log('Quantidade de elementos: '+stack.size())

// testando metodo toString
logSeparator('metodo toString')

const stringStack = stack.toString()
console.log(stringStack)



