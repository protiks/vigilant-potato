import LinkedList from './LinkedList'

class Stack {
    linkedList: LinkedList
    constructor() {
        this.linkedList = new LinkedList()
    }

    /** @return {boolean}*/
    isEmpty(): boolean {
        return !this.linkedList.head
    }

    /**
     * @return {*}
     */
    peek(): any {
        if (this.isEmpty()) {
            return null
        }
        return this.linkedList.head?.value
    }

    push(value: any) {
        this.linkedList.prepend(value)
    }
    /**
     * @return {*}
    */
    pop(): any {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null
    }
    /**
     * @return {*[]}
    */
    toArray(): any[] {
        return this.linkedList
            .toArray()
            .map((node) => node.value)
    }
    toString(callback: any) {
        return this.linkedList.toString(callback)
    }




}

export default Stack