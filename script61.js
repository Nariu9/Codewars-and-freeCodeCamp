function highAndLow(numbers){
    let num = numbers.split(' ').sort((a, b) => b - a);
    return`${num[0]} ${num[num.length-1]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));