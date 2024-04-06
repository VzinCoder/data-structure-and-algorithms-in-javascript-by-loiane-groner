const Node = require('../LinkedList/Node')


module.exports = class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element,next)
        this.prev = prev
    }

 }