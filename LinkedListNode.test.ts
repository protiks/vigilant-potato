import LinkedList from './LinkedList'
import LinkedListNode from './LinkedListNode'

describe('LinkedListNode', () => {
    it('should create list node with value', () => {
        const node = new LinkedListNode(1)
    
        expect(node.value).toBe(1)
        expect(node.next).toBeNull()
    })

    it('should create list node with object as a value', () => {
        const nodeValue = { value: 1, key: 'test'}
        const node = new LinkedListNode(nodeValue)

        expect(node.value.value).toBe(1)
        expect(node.value.key).toBe('test')
        expect(node.next).toBeNull()

    })
    it('should link nodes together', () => {
        const node2 = new LinkedListNode()
        const node1 =  new LinkedListNode()

        expect(node1.next).toBeDefined()
    })
}) 