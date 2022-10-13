function duplicateEncode(word) {
    return word.toLowerCase().split('').map((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')').join('')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))