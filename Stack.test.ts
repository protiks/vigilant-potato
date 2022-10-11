import Stack from './Stack'

describe('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack()
        expect(stack).not.toBeNull()
        expect(stack.linkedList).not.toBeNull()
    })
    it('should stack datat to Stack', () => {
        const stack = new Stack() 
        stack.push(1)
        stack.push(2)
        expect(stack.toString()).toBe('2,1')
    })
})