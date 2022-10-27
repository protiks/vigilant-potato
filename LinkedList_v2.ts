import LinkedList from "./LinkedList"

class Node<T> {
    value: T
    next: Node<T> | null
    constructor(value: T) {
        this.value = value
        this.next = null
    }
}



class LinkedList_v2<T> {
    private Size: number
    private Head: Node<T> | null
    private Tail: Node<T> | null

    constructor(...values: T[]) {
        this.Size = 0
        this.Head = null
        this.Tail = null
        if (values.length > 0) {
            values.map(value => this.append(value))
        }
    }
    private is_duplicate(val: T): boolean {
        let set = new Set(this.toArray())
        return set.has(val)
    }

    public toArray(): T[] {
        return [...this]
    }

    public *iterator(): IterableIterator<T> {
        let current_node = this.Head
        while (current_node) {
            yield current_node.value
            current_node = current_node.next
        }
    }

    [Symbol.iterator]() {
        return this.iterator()
    }

    /**
     * @return {returns the total size/length of the LinkedList}
    */
    public get length(): number {
        return this.Size
    }
    /**
     * @return {returns returns the current Head of a Linked List}
    */
    public get head() {
        return this.Head ? this.Head.value : null
    }
    /**
     * @return {returns returns the current Tail of a Linked List}
    */
    public get tail() {
        return this.Tail ? this.Tail.value : null
    }

    /**
     * Adds an element at the end of the Linked List 
     * @param {T} value 
     * @param {boolean} check_for_duplicates - Optional parameter. If set to true the value inserted will be tested for duplicates and return false. 
     * @returns {boolean} Returns true if append method was sucessfull  
     **/
    public append(value: T, check_for_duplicates: boolean = false): boolean {

        if (check_for_duplicates && this.is_duplicate(value)) {
            return false
        }

        let new_node = new Node<T>(value)
        if (!this.Tail) {
            this.Head = new_node
            this.Tail = new_node
        } else {
            this.Tail.next = new_node
            this.Tail = new_node
        }
        this.Size++
        return true
    }

    /**
     * Adds an element at the beginning of the Linked List
     * @param {value}
     * @returns {boolean}
     */
    public prepend(value: T, check_for_duplicates: boolean = false): boolean {

        if (this.Head && this.is_duplicate(value)) {
            return false
        }
        let new_node = new Node<T>(value)
        if (!this.Head) {
            this.Head = new_node
            this.Tail = new_node
        } else {
            this.Head.next = new_node
            this.Head = new_node
        }
        this.Size++
        return true
    }

    public removeHead() {
        let current_node = this.Head
        if (!current_node) {
            return
        }

        if (!this.Head?.next) {
            this.Head = null
            this.Tail = null
        } else {
            this.Head = this.Head.next
            current_node.next = null
        }
        this.Size--
        return current_node.value
    }
    public removeTail() {
        let current_node = this.Head
        let deleted_node_value 
        if (!current_node) {
            return
        }
        if (this.Tail === this.Head) {
            this.Tail = null
            this.Head = null
            deleted_node_value = current_node.value 
        }
        
        while (current_node.next) {
            if (!current_node.next.next) {
                deleted_node_value = current_node.next.value
                current_node.next = null
            } else {
                current_node = current_node.next
                this.Tail = current_node
            }
        }
        this.Size--
        console.log('In class Tail:', this.Tail, '<<>>current_node:', current_node, '<<>>delete:' ,deleted_node_value)
        return deleted_node_value 
    }
    public remove(value: T): T {
        return value
    }

}


export default LinkedList_v2