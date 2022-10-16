import LinkedList from './LinkedList'

describe('LinkedList', () => {
    it('should create empty linked list',  () => {

        const linkedList = new LinkedList()
        expect(linkedList.toString()).toBe('')
    })

    it('should append node to linked list', () => {
        const linkedList = new LinkedList()

        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()


        linkedList.append('One')
        linkedList.append(2)
        
        expect(linkedList.toString()).toBe('One,2')
        console.log(linkedList.tail)
        expect(linkedList.tail?.next).toBeNull()
    })
    it('should prepend node to linked list', () => {
        const linkedList = new LinkedList()

        linkedList.prepend(2)
        expect(linkedList.head?.toString()).toBe('2')
    })
})
