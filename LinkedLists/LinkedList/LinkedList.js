const defaultEquals = require('../../util')
const Node = require('./Node')


module.exports = class LinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element) {
        const node = new Node(element)

        if (this.head == null) {
            this.head = node
            this.count++
            return
        }

        let current = this.head

        while (current.next != null) {
            current = current.next
        }

        current.next = node
        this.count++
    }

    insert(element, index) {
        if (this.isOutOfRange(index)) {
            return false
        }

        const node = new Node(element)

        if(index === 0){
            node.next = this.head
            this.head = node
            this.count++
            return true
        }

        const previous = this.getElementAt(index-1)
        const current = previous.next

        node.next = current
        previous.next = node
        this.count++

        return true
    }



    getElementAt(index) {

        if (this.isEmpty() || this.isOutOfRange(index)) {
            return
        }

        let node = this.head
        for (let i = 0; i < index && node != null; i++) {
            node = node.next
        }

        return node
    }

    remove(element) {
       const index = this.indexOf(element)
       return this.removeAt(index)
    }

    removeAt(index) {

        if (this.isEmpty() || this.isOutOfRange(index)) {
            return
        }

        if (index === 0) {
            this.head = this.head.next
            this.count--
            return
        }

        let previous = this.getElementAt(index - 1)
        let current = previous.next

        previous.next = current.next
        this.count--
    }

    isOutOfRange(index) {
        return index < 0 || index > this.count - 1
    }


    indexOf(element) {
        let node = this.head

        for (let i = 0; i < this.count && node != null; i++) {
            if (this.equalsFn(element,node.element)) {
                return i
            }
            node = node.next
        }
        return -1
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count
    }

    clear(){
        this.head = undefined
        this.count = 0
    }


    toString() {
        if (this.head == null) {
            return ''
        }

        
        let objString = `${this.head.element}`
        let current = this.head.next

        for (let i = 1; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }

        return objString
    }

    getHead(){
        return this.head
    }

}