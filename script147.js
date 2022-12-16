function sumDigits(n) {
    const arr = `${n}`.split('')
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            continue
        }
        res += +arr[i]
    }
    return res
}

console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))
console.log(sumDigits(135))