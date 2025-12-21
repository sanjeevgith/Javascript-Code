let dataRemove = [1, 2, 3, 4, 5];
let numRemove = 4;

let index = data.indexOf(numRemove);

// If the element is found, remove it
if (index !== -1) {
    data.splice(index, 1); //splice remove index value
}

console.log(data); // Output: [1, 2, 3, 5]
