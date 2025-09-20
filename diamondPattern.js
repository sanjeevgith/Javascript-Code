//Diamond Pattern
for(let i=0;i<5;i++){
    let space = '';
    let star = ''
   for(let j=0;j<5-i-1;j++){
       space+=' '
   } 
   for(let j=0;j<2*i+1;j++){
       star+='*'
   }
   console.log(space,star)
}
for(let i=5-2;i>=0;i--){
    let space = '';
    let star = ''
   for(let j=0;j<5-i-1;j++){
       space+=' '
   } 
   for(let j=0;j<2*i+1;j++){
       star+='*'
   }
   console.log(space,star)
}
