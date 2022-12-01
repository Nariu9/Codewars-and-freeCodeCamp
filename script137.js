function nextPal(val) {
    for (let i = val+1; i < Number.MAX_VALUE; i++) {
        if (i === Number((i).toString().split('').reverse().join(''))) {
            return i
        }
    }
}

console.log(nextPal(11))
console.log(nextPal(188))
console.log(nextPal(191))
console.log(nextPal(2541))