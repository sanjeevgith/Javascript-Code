let dataRemove = [1, 2, 3, 4, 5];
let numRemove = 4;

let index = dataRemove.indexOf(numRemove);

// If the element is found, remove it
if (index !== -1) { //if element in not present then indexOf return -1 we are using this condition to check if element is present or not
    //!== because we want to check if index is not equal to -1, which means the element is present in the array. 
    // If it is present, we can remove it using splice method.
    dataRemove.splice(index, 1); //splice remove index value
}

console.log(dataRemove); // Output: [1, 2, 3, 5]