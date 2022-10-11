class LinkedListNode {
    value
    next 
    constructor(value: any, next?: LinkedListNode | null) {
        this.value = value
        this.next = next
    }

    toString(callback: (arg0: any) => any) {
        return callback ? callback(this.value) : `${this.value}` 
    }
}

// const a = new LinkedListNode(2)
// const b = new LinkedListNode(3)
// const c = new LinkedListNode(4)
// console.log(a)
// console.log(b)
// console.log(c)
export default LinkedListNode