class Comparator {
    compare: any
    constructor( compareFunction: any  ) {
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }
    static defaultCompareFunction(a: number, b: number) {
        if (a === b) {
            return 0
        }
        return a < b ? -1 : 1
    }
    equal(a: any, b: any) {
        return this.compare(a, b) === 0
    }
    lessThan(a: any, b: any) {
        return this.compare(a, b) < 0
    }
    lessThanOrEqual(a: any, b: any) {
        return this.lessThan(a,b) || this.equal(a, b)
    }
    greaterThanOrEqual({ a, b }: { a: any; b: any }): any {
        return this.greaterThanOrEqual({ a, b }) || this.equal(a, b)
    }
    reverse () {
        const compareOriginal = this.compare
        this.compare = (a: any, b: any) => compareOriginal(b, a)
        
    }
}
export default Comparator