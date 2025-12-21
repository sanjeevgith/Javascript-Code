let dataMaxMin = [88, 7, 6, 9, 3, 16, 76, 18, 100];
let averages = [];  
while (dataMaxMin.length > 0) {
    let max = Math.max(...dataMaxMin); // ... to pass indivitual element one by one
    let min = Math.min(...dataMaxMin);
    let ave = (max + min) / 2;
    averages.push(ave);
    dataMaxMin = dataMaxMin.filter(value => value !== max && value !== min); //removing max and min value from array
}
console.log(averages);
