// Makes a copy of data you can serialize
(const deepCopy = (x) => JSON.parse(JSON.stringify(x)))

// When you write reducers try to write your input and output like this:
(currentState = initialValue, action)
return nextState

// You always have to birth a new array, a new copy, etc.
// instead of mutating the existing array, etc.

// Use the spread operator ( ... ) to avoid mutations

function updateObject(object) {
    var newObject = {
    ...object, // Copy all the key/values from object
    foo: “bar” // Overwrite the “foo” key from object
    };
}

function copyArray(array) {
    var newArray = [
    ...array // Copy all the items from array
    ];
}

var x = ["a", "b", "c"]
var y = [ ...x, "d"]
var y = ["a", "b", "c", "d"]
