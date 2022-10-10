const Stack = require('./Stack') 

describe('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack()
        expect(stack).not.toBeNull()
        expect(stack.linkedList).not.toBeNull()
    })
})