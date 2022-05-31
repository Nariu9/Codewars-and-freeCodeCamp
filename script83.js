function sumEvenNumbers(input) {
    return input.filter(el => el % 2 === 0).reduce((sum, current) => sum + current, 0)
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]))