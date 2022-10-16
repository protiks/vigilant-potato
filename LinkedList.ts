import LinkedListNode from './LinkedListNode'
import Comparator from './Comparator'

type Node = LinkedListNode | null | undefined

class LinkedList {
    /**
     * @param {Function} [comparatorFunction]
    */
    public head: Node
    public tail: Node
    public compare: Comparator
    constructor(comparatorFunction?: any) {
        /** @var {Node} */
        this.head = null
        /** @var {Node} */
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
    }

    /**
     * @param {*} value
     * @return {LinkedList}
    */

    prepend(value: any): LinkedList {
        // Make new node to be a head
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode

        // If there is no tail, create a new Node and set as tail
        if (!this.tail) {
            this.tail = newNode
        }
        return this
    }
    /**
     * @return {LinkedList}
    */
    append(value: any): LinkedList {
        const newNode = new LinkedListNode(value)
        // If there is no head yet lets make a new node a head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            console.log('this.tail is here', this.tail)
            return this
        }
        // Attatch new node to the end of linked list 
        this.tail!.next = newNode
        this.tail = newNode
        return this
    }

    insert(value: any, rawIndex: number) {
        const index = rawIndex < 0 ? 0 : rawIndex
        if (index === 0) {
            this.prepend(value)
        } else {
            let count = 1
            let currentNode = this.head
            const newNode = new LinkedListNode(value)
            while (currentNode) {
                if (count === index) break
                currentNode = currentNode.next
                count += 1
            }
            if (currentNode) {
                newNode.next = currentNode.next
                currentNode.next = newNode
            } else {
                if (this.tail) {
                    this.tail.next = newNode
                    this.tail = newNode
                } else {
                    this.head = newNode
                    this.tail = newNode
                }
            }
        }
        return this
    }

    delete(value: any): Node {
        if (!this.head) {
            return null
        }
        let deletedNode: Node = null
        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head
            this.head = this.head.next
        }
        let currentNode = this.head
        if (currentNode !== null) {
            while (currentNode?.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next
                    currentNode.next = currentNode.next
                } else {
                    currentNode = currentNode?.next
                }
            }
        }
        if (this.compare.equal(this.tail?.value, value)) {
            this.tail = currentNode
        }
        return deletedNode
    }

    find(value: undefined, callback: (arg0: any) => any) {
        if (!this.head) {
            return null
        }
        let currentNode: Node = this.head

        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode
            }
            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }

    /**
     * @return {LinkedListNode} 
     */
    deleteTail(): LinkedListNode | null | undefined {
        const deletedTail = this.tail

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return deletedTail
        }
        let currentNode = this.head
        while (currentNode?.next) {
            if (!currentNode.next.next) {
                currentNode.next = null
            } else {
                currentNode = currentNode.next
            }
        }
        this.tail = currentNode
        return deletedTail
    }

    deleteHead(): LinkedListNode | null {
        if (!this.head) {
            return null
        }
        const deletedHead = this.head
        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        return deletedHead
    }
    /** 
     * @param {*[]}
     * @return {LinkedList}
     * */
    fromArray(values: any[]): LinkedList {
        values.forEach(value => this.append(value))
        return this
    }
    /**
     * @return {LinkedListNode[]}
    */
    toArray(): LinkedListNode[] {
        const nodes: LinkedListNode[] = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }
    /**
     * @param {function} [callback]
     * @return {string}
    */
   toString(callback?: Function): string {
    return this.toArray().map((node) => node.toString(callback)).toString()
   }

    reverse() {
        let currentNode: Node = this.head
        let previousNode: Node = null
        let nextNode: Node = null

        while (currentNode) {
            nextNode = currentNode.next

            currentNode.next = previousNode

            previousNode = currentNode
            currentNode = nextNode
        }

        this.tail = this.head
        this.head = previousNode
        return this
    }
}
const a = new LinkedList()
a.append(1)
a.append(2)
console.log(a.head?.toString)


export default LinkedList