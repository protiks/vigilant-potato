import { describe, expect, test} from '@jest/globals'
import Stack from './Stack'

describe.skip('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack()
        expect(stack).not.toBeNull()
        expect(stack.linkedList).not.toBeNull()
    })
    it('should stack data to Stack', () => {
        const stack = new Stack() 

        stack.push(1)
        stack.push(2)

        expect(stack.toString(3)).toBe('2,1')
    })
    it('should peek data from a stack', () => {
        const stack = new Stack()

        expect(stack.peek()).toBeNull()

        stack.push(1)
        stack.push(2)

        expect(stack.peek()).toBe(2)
    })
})