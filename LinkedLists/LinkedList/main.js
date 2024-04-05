const logSeparator = require('../logSeparator')



// importando a linkedList
const LinkedList = require('./LinkedList/LinkedList')


// criando a linkedList
const linkedList = new LinkedList()

// adicionando elemento no final da lista
logSeparator("adicionando elemento no final da lista")

linkedList.push(1)
linkedList.push(3)
linkedList.push(4)

console.log(linkedList.toString())

// adicionando elemento em  uma posicao especifica
logSeparator("adicionando elemento em uma posicao especifica")
console.log(linkedList.toString())

linkedList.insert(2,1)
console.log(linkedList.toString())

// removendo elemento
logSeparator("removendo elemento")
console.log(linkedList.toString())

linkedList.remove(1)
console.log(linkedList.toString())

// removendo elemento pelo index
logSeparator("removendo elemento pelo index")
console.log(linkedList.toString())

linkedList.removeAt(2)
console.log(linkedList.toString())

// verificando se a lista esta vazia
logSeparator("verificando se a lista esta vazia")
console.log(linkedList.isEmpty())

linkedList.remove(2)
linkedList.remove(3)
console.log(linkedList.isEmpty())

// verificando tamanho da lista 
logSeparator("verificando tamanho da lista")
console.log(linkedList.size())

linkedList.push(1)
linkedList.push(2)
console.log(linkedList.size())

// verificando indice de um elemento
logSeparator("verificando indice de um elemento")

console.log(linkedList.indexOf(2))
console.log(linkedList.indexOf(10))

// retornando elemento pelo indice
logSeparator("retornando elemento pelo indice")

console.log(linkedList.getElementAt(0))

// retornando primeiro elemento
logSeparator("retornando elemento pelo indice")
console.log(linkedList.getHead())