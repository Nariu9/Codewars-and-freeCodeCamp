function oddOrEven(array) {
    let sum = 0;
    for (let i=0; i < array.length; i++) {
        sum += array[i];
    }
    return sum%2 === 0 || array.length === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]))