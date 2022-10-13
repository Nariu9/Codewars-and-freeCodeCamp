function sortArray(array) {
    let oddArr = array.filter(n => n % 2).sort((a, b) => a - b)
    return array.map(n => n % 2 ? oddArr.shift() : n)
}

console.log(sortArray([7, 1]))
console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))