//convert array string into randum prime number 
let arrayString = [1, 2, 4, 'san', 3, 'ajay', 'e', 4];
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }   
    }
    return true;
}
let primeCountNum = 1;
for (let i = 0; i < arrayString.length; i++) {
    if (typeof arrayString[i] == 'string') {
        if (!isPrime(primeCountNum)) {
            primeCountNum++
        }
        arrayString[i] = primeCountNum;
        primeCountNum++
    }
}
console.log("arrayString", arrayString);
