function sumMix(x){
    let sum = 0;
    x.map(item => {
        sum += parseInt(item);
    })
    return sum;
}

console.log(sumMix([9, 3, '7', '3']))