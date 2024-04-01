const logSeparator = require('../../logSeparator')

// importando a queue
const Queue = require('./Queue')


//criando a queue
const queue = new Queue()

//adicionando elemento na queue
logSeparator("adicionando elemento na queue")

console.log(queue)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue)

//removendo elemento da queue
logSeparator("removendo elemento da queue")
console.log(queue)

queue.dequeue()
console.log(queue)

// acessando primeiro elemento da queue 
logSeparator("acessando primeiro elemento da queue")
console.log(queue)

console.log(queue.peek())

// verificando se a queue esta vazia
logSeparator("acessando primeiro elemento da queue")
console.log(queue)

console.log(queue.isEmpty())

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue)
console.log(queue.isEmpty())

//retornando o tamanho da queue
logSeparator("retornando o tamanho da queue")
console.log(queue)

console.log(queue.size())

queue.enqueue(100)
console.log(queue)
console.log(queue.size())

// limpando a queue
logSeparator("limpando a queue")
console.log(queue)

queue.clear()
console.log(queue)


// testando o metodo toString
logSeparator("testando o metodo toString")
console.log(queue)

queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)
console.log(queue)

console.log(queue.toString())


// testando a fila usando objetos
logSeparator("testando a fila usando objetos")

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

const person1 = new Person('jubileu',18)
const person2 = new Person('aninha',10)
const person3 = new Person('maria',32)

const queueTest = new Queue()

queueTest.enqueue(person1) // first person in queue
queueTest.enqueue(person2) // second person in queue
queueTest.enqueue(person3) // third person in queue

while(!queueTest.isEmpty()){
    console.log(queueTest.dequeue())
}




