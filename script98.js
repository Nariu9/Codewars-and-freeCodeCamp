function reverseLetter(str) {
   return  str.match(/[A-Za-z]/gi).reverse().join('')
}

console.log(reverseLetter("ultr53o?n"))