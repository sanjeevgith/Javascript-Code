//fibonacci sequence unto n=10
let dataF =[0,1];
for(let i=2;i<10;i++){
    dataF.push(dataF[i-2]+dataF[i-1]);
}
console.log(dataF);


let dataF1 = []; //without initial vlaue
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        dataF1.push(0);
    } else if (i === 1) {
        dataF1.push(1);
    } else {
        dataF1.push(dataF1[i - 1] + dataF1[i - 2]);
    }
}

console.log(dataF1);
