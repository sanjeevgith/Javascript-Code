
let datString = 'this is my laptop';
let data = datString.split(' ')
let result = ''
for(let i=0;i<data.length;i++){
result  += (data[i].charAt(0).toUpperCase() + data[i].substring(1).toLowerCase());
if(i < data.length-1){
    result+=' '
}
}
console.log(result)