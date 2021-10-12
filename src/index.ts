let id: number = 5
let company: string = 'Traverse Town'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}


// Objects
type User = {
    id: number,
    name: string
}

const user = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = cid