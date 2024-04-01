const { logSeparator } = require('../logSeparator.js')

// importando a stack
const { StackObject, StackArray } = require('./Stack')


//Convertendo números decimais para binários
logSeparator('Convertendo números decimais para binários')

function decimalToBinary(decNumber) {
    const stack = new StackObject()

    let number = decNumber
    let rem = null

    while (number > 0) {
        rem = number % 2
        stack.push(rem)
        number = Math.floor(number / 2)
    }

    let numberBinary = ''

    while(!stack.isEmpty()){
        numberBinary+= stack.pop()
    }
         
    return numberBinary
}

console.log(233,10,1000)
console.log(decimalToBinary(233),decimalToBinary(10),decimalToBinary(1000))

//Algoritmo conversor de base
logSeparator('Algoritmo conversor de base')

function baseConverter(decNumber,base){
    const stack = new StackObject()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(!(base >=  2 && base<=36)){
        return ''
    }

    let number = decNumber
    let rem = null

    while (number > 0) {
        rem = number % base
        stack.push(rem)
        number = Math.floor(number / base)
    }

    let numberConverted = ''

    while(!stack.isEmpty()){
        numberConverted+= digits[stack.pop()] 
    }
         
    return numberConverted
}

console.log(baseConverter(100345,2))
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))
console.log(baseConverter(100345,35))