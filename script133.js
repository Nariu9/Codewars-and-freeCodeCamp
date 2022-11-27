function stray(numbers) {
    return numbers.find((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]))