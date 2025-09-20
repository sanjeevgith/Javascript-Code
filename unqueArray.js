//using filter
let dataArray = [1, 2, 3, 4, 3, 2, 5, 7, 5, 4, 29];
let unique = dataArray.filter(
  (data, index) => dataArray.indexOf(data) === index
);
console.log(unique);

//using indexOf for loop
let uniq = [];
for (let i = 0; i < dataArray.length; i++) {
  if (uniq.indexOf(dataArray[i]) == -1) {
    uniq.push(dataArray[i]);
  }
}
console.log(uniq);

//using reduce includes 
let uniqueReduce = dataArray.reduce((accumilator,currentvalue)=>{
  if(!accumilator.includes(currentvalue)){
    accumilator.push(currentvalue)
  }
  return accumilator;
},[])
console.log(uniqueReduce)

//using only for loop custom
let uniqueFor = [];
for(let i=0;i<dataArray.length;i++){
     let uniqFlag = true;
     for(let j=0;j<uniqueFor.length;j++){
      if(uniqueFor[j]== dataArray[i]){
        uniqFlag= false;
      }
     }
     if(uniqFlag){
       uniqueFor.push(dataArray[i]);
     }
}
console.log(uniqueFor)

