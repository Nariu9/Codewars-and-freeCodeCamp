var number = function (array) {
    return array.map((str, i) => `${i + 1}: ${str}`)
}

console.log(number([]))