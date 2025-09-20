//sort object based on age 
let data = [
    {
        name:'sanjeev',
        age:20
    },
     {
        name:'ajay',
        age:10
    },
     {
        name:'raaj',
        age:46
    },
     {
        name:'bipinawa',
        age:25
    }
]

//using sort method
let sortedMethod = data.sort((a,b)=>a.age-b.age);
console.log(sortedMethod);

//using for loop
for(let i=0;i<data.length;i++){
  for(let j=0;j<data.length;j++){
     if(data[j].age> data[j+1]){
       let temp = data[j+1];
       data[j+1] = data[j];
       data[j] = temp;
     }
  }
}
console.log(data);

