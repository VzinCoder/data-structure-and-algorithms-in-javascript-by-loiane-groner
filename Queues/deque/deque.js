
module.exports = class Deque {

    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }


    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
            return
        }

        if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
            return
        }

        for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1]
        }

        this.count++
        this.lowestCount = 0
        this.items[0] = element

    }

    addBack(element) {
        this.items[this.count++] = element
    }


    removeFront() {
        if (this.isEmpty()) return

        const elementRemoved = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++

        return elementRemoved
    }

    removeBack() {
        if (this.isEmpty()) return

        const indexFinalElement = this.count - 1
        const elementRemoved = this.items[indexFinalElement]
        delete this.items[indexFinalElement]
        this.count--

        return elementRemoved
    }

    peekFront() {
        if (this.isEmpty()) return

        return this.items[this.lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) return

        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {

        this.count = 0
        this.lowestCount = 0
        this.items = {}

    }

    toSring() {

        if (this.isEmpty()) return ''

        let objString = `${this.items[this.lowestCount]}`

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }

        return objString

    }
}