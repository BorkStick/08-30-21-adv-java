let helloWorld = "Hello World";

const user = {
    name: "Terry",
    id: 0
}

interface User {
    name: string;
    id: number;
}

const otherUser: User = {
    name: "steve",
    id: 1,
}


// numbers
let decimal: number = 4
let hex: number = 0xf00d
let binary: number = 10101
let octal: number = 0o744
// let big: bigint = 100n

//strings
let color = `red`;
let colorTwo = 'green';
let colorThree = "blue";


// arrays

let numArray: number[] = [1,2,3];
let list: Array<number> = [4,5,6];

//tuples
let x: [string, number] = ["test", 22];
// this aint gonna work its in the wrong order should be [string, number]
// x = [42, "boop"];

enum Color {
    Red,
    Green = 3,
    Blue
}

let c: Color = Color.Green;
