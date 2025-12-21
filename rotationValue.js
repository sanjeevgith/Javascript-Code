let dataRotation = [1, 2, 3, 4, 5, 6, 7];
let n = 2;

// Create a new array to hold the rotated values
let output = [];

// Use a for loop to populate the output array
for (let i = 0; i < dataRotation.length; i++) {
    // Calculate the new index after rotation
    let newIndex = (i + n) % dataRotation.length; //% return reminder i 0 + n / 7= 2reminder
    output[newIndex] = dataRotation[i]; //second index to first loop me 2 value
}

console.log(output); // Output: [5, 6, 7, 1, 2, 3, 4]
