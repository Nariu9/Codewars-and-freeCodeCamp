function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        let arr = Array.from(String(i), Number);
        if (i === arr.reduce((accum, value, index) => {
            return accum + value ** (index+1);
        })) {
            result.push(i);
        }
    }
    return result;
}

console.log(sumDigPow(10, 150));