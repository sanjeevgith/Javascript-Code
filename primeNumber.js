//prime number 
n=4;
isPrime = true;
if(n==1){
    isPrime = false;
}
if(n>1){
    for(let i=2;i<n;i++){
        if(n%2==0){
            isPrime = false
            break
        }
    }
}
console.log("Is Prime Number = ",isPrime);