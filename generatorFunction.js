// create new iterators
console.clear();
// Generator for lazy evaluation
function* getItems() {
    yield getSum();
    yield "Item 3";
    yield getmulti();
}

const items = getItems();

// The items are processed one by one only when needed
console.log(items.next().value); // Item 1

setTimeout(() => {
    console.log(items.next().value); // Item 2
}, 3000);
console.log(items.next().value); // Item 3


function getSum(){
    return 1+ 100;
}
function getmulti(){
    return 1 * 500;
}