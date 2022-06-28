function XO(str) {
    const arr = str.toLowerCase().split('')
    const result = {x: 0, o: 0}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            result.x++
        } else if (arr[i] === 'o') {
            result.o++
        }
    }
    return result.x === result.o
}

console.log(XO("zpzpzpp"))