var dataOccurance = [5, 7, 4, 3, 3, 5, 7, 9, 5, 5];
let countOccurrencess = {};
for(let i=0;i<dataOccurance.length;i++){
    let num  = dataOccurance[i];
    if(countOccurrencess[num]){
        countOccurrencess[num]++ //if object key present value increament by 1
    }
    else{
        countOccurrencess[num] = 1; //first object is emty then assign value 1
    }
}
console.log(countOccurrencess)
for(let num in countOccurrencess){
    console.log(num ,'is' ,countOccurrencess[num] ,'times')
}