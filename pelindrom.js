//given string or number pelindrom or not
let dataPelindrome="sanas";
let isPelindrome = true;
for (let i = 0; i < dataPelindrome.length/2; i++) {
    if(dataPelindrome[i]!==dataPelindrome[dataPelindrome.length-1-i]){ // length-1-i left to right 
        isPelindrome= false;
    }
}
console.log('isPelindrom', isPelindrome)