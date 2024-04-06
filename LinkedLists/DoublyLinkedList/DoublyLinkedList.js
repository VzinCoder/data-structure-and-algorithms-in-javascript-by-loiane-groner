const LinkedList = require('../LinkedList/LinkedList')
const DoublyNode = require('./DoublyNode')

module.exports = class DoublyLinkedList extends LinkedList {

    constructor(equalsfn) {
        super(equalsfn)
        this.tail = undefined
    }

    push(element) {
        const node = new DoublyNode(element)

        const insertPattern = () => {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        const insertInit = () => {
            this.head = node
            this.tail = node
        }

        const action = this.head != null ? insertPattern : insertInit
        action()

        this.count++
    }

    insert(element, index) {

        if (this.isOutOfRange()) return false

        const node = new DoublyNode(element)
        let current = this.head

        const insertAtBeginning = () => {

            if (this.head == null) {
                this.head = node
                this.tail = node
                return
            }

            node.next = this.head
            this.head.prev = node
            this.head = node

        }

        const insertAtEnd = () => {
            current = this.tail
            current.next = node
            node.prev = current
            this.tail = node
        }

        const insertAtMiddle = () => {
            const previous = this.getElementAt(index - 1)

            current = previous.next
            node.next = current
            previous.next = node
            current.prev = node
            node.prev = previous
        }

        const actions = {
            0: insertAtBeginning,
            [this.count]: insertAtEnd,
            default: insertAtMiddle
        }

        const action = actions[index] || actions.default
        action()

        this.count++
        return true
    }


    removeAt(index) {

        if (this.isOutOfRange()) {
            return false
        }

        let current = this.head

        const removeFirst = () => {
            this.head = this.head.next
            if (this.count === 1) this.tail = undefined
            else this.head.prev = undefined
        }

        const removeLast = () => {
            current = this.tail
            this.tail = current.prev
            this.tail.next = undefined
        }

        const removeMiddle = () => {
            current = this.getElementAt(index)
            const previous = current.prev
            previous.next = current.next
            current.next.prev = previous
        }

        const actions = {
            0: removeFirst,
            [this.count - 1]: removeLast,
            default: removeMiddle
        }

        const action = actions[index] || actions.default
        action()

        this.count--
        return current.element
    }

    indexOf(element) {
        let current = this.head
        let index = 0

        while (current != null) {
          if (this.equalsFn(element, current.element)) {
            return index
          }
          index++
          current = current.next
        }

        return -1
      }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    clear() {
        super.clear()
        this.tail = undefined
    }

    toString() {
        if (this.head == null) {
            return ''
        }

        let objString = `${this.head.element}`
        let current = this.head.next

        while (current != null) {
            objString = `${objString},${current.element}`
            current = current.next
        }

        return objString
    }

    inverseToString() {
        if (this.tail == null) {
            return ''
        }

        let objString = `${this.tail.element}`
        let previous = this.tail.prev

        while (previous != null) {
            objString = `${objString},${previous.element}`
            previous = previous.prev
        }

        return objString
    }



}