const { logSeparator } = require('../logSeparator')

// criando array
let arrayNumbers = [1, 2, 3, 4, 5]


// acessar elemento do array
logSeparator('acessando elemento')

const firstElement = arrayNumbers[0] //retorna o primeiro elemento e atribui a variavel
console.log(firstElement) // exibe 1

// acessar comprimento do array
logSeparator('acessando comprimento')

const sizeArr = arrayNumbers.length //retorna o comprimento do arr e atribui a variavel
console.log(sizeArr) // exibe 5

// percorrer array
logSeparator('exibindo todos os elementos do arr')

for (let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i]) // exibe os 5 numeros do array
}


//exibindo os 20 primeiros valores da sequencia de fib
logSeparator('fib')

const fib = new Array(20).fill(null)  // cria arr de tamanho 20

fib[0] = 0
fib[1] = 1

for (let i = 2; i <= 20; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
}

console.log(fib.join(',')) // join retorna uma string baseada no arr onde cada elemento é separado por ','


//adicinar novo elemento no arr
logSeparator('adicionando elemento')

console.log(arrayNumbers) // exibe o arr

arrayNumbers.push(10) // adiciona 10 ao final do arr

console.log(arrayNumbers)// exibe o arr

//adicinar elemento na primeira posicao do arr
logSeparator('adicionando elemento na primeira posicao')

console.log(arrayNumbers) // exibe o arr

arrayNumbers.unshift(10) // adiciona 10 ao final do arr

console.log(arrayNumbers)// exibe o arr

//removendo ultimo elemento do arr
logSeparator('removendo elemento da ultima posicao')

console.log(arrayNumbers) // exibe o arr

arrayNumbers.pop() // adiciona 10 ao final do arr

console.log(arrayNumbers)// exibe o arr

//removendo primeiro elemento do arr
logSeparator('removendo elemento da primeira posicao')

console.log(arrayNumbers) // exibe o arr

arrayNumbers.shift() // adiciona 10 ao final do arr

console.log(arrayNumbers)// exibe o arr


// adicionando e removendo elementos sem usar metodos da linguagem
logSeparator('adicionando e removendo elementos sem usar metodos da linguagem')

Array.prototype.insertFirstPosition = function (value) {

    for (let i = this.length; i > 0; i--) {
        this[i] = this[i - 1]
    }

    this[0] = value
}

Array.prototype.reIndex = function () {
    const newArr = []

    let indexNewArr = 0
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== 'undefined') {
            newArr[indexNewArr++] = this[i]
        }
    }

    return newArr
}

Array.prototype.removeFirstPosition = function () {

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }

    return this.reIndex()
}

console.log(arrayNumbers)
arrayNumbers.insertFirstPosition(10)
console.log(arrayNumbers)

arrayNumbers = arrayNumbers.removeFirstPosition()
console.log(arrayNumbers)

// adicionando e removendo elementos de uma posicao especifica 
logSeparator('adicionando e removendo elementos de uma posicao especifica')


console.log(arrayNumbers)
arrayNumbers.splice(3, 0, 4, 5) // adiciona 4 e 5 a partir do indice 3(inclusive)
console.log(arrayNumbers)

arrayNumbers.splice(3, 2)  // remove 2 elementos apartir do indice 3(inclusive)
console.log(arrayNumbers)

// adicionando e removendo elementos de uma posicao especifica sem metodos da linguagem
logSeparator('adicionando e removendo elementos de uma posicao especifica sem metodos da linguagem')


Array.prototype.addElementInIndex = function (element, index) {

    if(index > this.length || index < 0){
        throw new Error('Position invalid')
    }

    for (let i = this.length; i > index; i--) {
        this[i] = this[i - 1]
    }

    this[index] = element
}

Array.prototype.removeElementInIndex = function (index) {

    if(index >= this.length || index < 0){
        throw new Error('Position invalid')
    }

    for (let i = index; i < this.length; i++) {
        this[i] = this[i+1]
    }

    return this.reIndex()
}

console.log(arrayNumbers)
arrayNumbers.addElementInIndex(10,2)
console.log(arrayNumbers)

arrayNumbers = arrayNumbers.removeElementInIndex(2)
console.log(arrayNumbers)