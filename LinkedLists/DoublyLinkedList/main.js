const logSeparator = require('../../logSeparator')

// import DoublyLinkedList
const DoublyLinkedList = require("./DoublyLinkedList")


//creating DoublyLinkedList
const doublyLinkedList = new DoublyLinkedList()


// added elements at the end of the DoublyLinkedList
logSeparator("added elements at the end of the DoublyLinkedList")
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)

console.log(doublyLinkedList.toString())
console.log(doublyLinkedList.inverseToString())

// added elements at the middle of the DoublyLinkedList
logSeparator("added elements at the middle of the DoublyLinkedList")
doublyLinkedList.insert(0,0)
doublyLinkedList.insert(3,3)
doublyLinkedList.insert(4,4)

console.log(doublyLinkedList.toString())
console.log(doublyLinkedList.inverseToString())

// remove elements in DoublyLinkedList
logSeparator("remove elements in DoublyLinkedList")

console.log("Element removed: "+doublyLinkedList.removeAt(0))
console.log("Element removed: "+doublyLinkedList.removeAt(4))

console.log(doublyLinkedList.toString())
console.log(doublyLinkedList.inverseToString())

// get first element 
logSeparator("get first element")

console.log(doublyLinkedList.getHead().element)

// get last element 
logSeparator("get last element")

console.log(doublyLinkedList.getTail().element)

// get index of element
logSeparator("get index of element")

console.log(doublyLinkedList.indexOf(3))

// clear list
logSeparator("clear list")

console.log(doublyLinkedList)
doublyLinkedList.clear()
console.log(doublyLinkedList)