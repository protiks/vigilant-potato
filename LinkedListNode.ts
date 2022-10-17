class Node {
    value
    next
    constructor(value?: any, next: Node | null = null) {
        this.value = value
        this.next = next 
    }

    toString(callback?: Function | undefined) {
        return callback ? callback(this.value) : `${this.value}`
    }
}


const a = new Node(2)
// const b = new LinkedListNode(3)
// const c = new LinkedListNode(4)
console.log(a)
// console.log(b)
// console.log(c)

export default Node