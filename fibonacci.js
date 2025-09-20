//fibonacci sequence unto n=10
let dataF =[0,1];
for(let i=2;i<10;i++){
    dataF.push(dataF[i-2]+dataF[i-1]);
}
console.log(dataF);
