var helloWorld = "Hello World";
var user = {
    name: "Terry",
    id: 0
};
var otherUser = {
    name: "steve",
    id: 1
};
// numbers
var decimal = 4;
var hex = 0xf00d;
var binary = 10101;
var octal = 484;
// let big: bigint = 100n
//strings
var color = "red";
var colorTwo = 'green';
var colorThree = "blue";
// arrays
var numArray = [1, 2, 3];
var list = [4, 5, 6];
//tuples
var x = ["test", 22];
// this aint gonna work its in the wrong order should be [string, number]
// x = [42, "boop"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
