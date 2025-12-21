(function progress(num =10){
    console.log(num)
    if(num < 100){
        num+=10
       setTimeout(() => progress(num), 3000);
    }
}())
//progress bar increament by 10 untill 100