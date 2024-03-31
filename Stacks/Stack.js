
exports.StackArray = class StackArray {

    constructor() {
        this.items = []
    }

    push(...elements) {
        this.items.push(...elements)
    }


    pop() {
        return this.items.pop()
    }


    peek() {
        return this.items[this.items.length - 1]
    }


    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    toString(){

        return this.items.join()
    }

}


exports.StackObject = class StackObject {

    constructor() {
        this.count = 0
        this.items = {}
    }

    push(...elements) {
        elements.forEach(item => {
            this.items[this.count++] = item
        })
    }


    pop() {
        if (this.isEmpty()) return 'undefined'

        this.count--

        const finalElement = this.items[this.count]

        delete this.items[this.count]

        return finalElement
    }


    peek() {
        if (this.isEmpty()) return 'undefined'

        return this.items[this.count - 1]
    }


    isEmpty() {
        return this.count === 0
    }

    clear() {
        /* 
           while(!this.isEmpty()){
               this.pop()
           }
        */

        this.count = 0
        this.items = {}
    }

    size() {
        return this.count
    }

    toString(){
        if(this.isEmpty()) return ''

        let objString = `${this.items[0]}`
        for(let i=1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }

}