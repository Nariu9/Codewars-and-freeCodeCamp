function findNextPower(val, pow_) {
    for (let i = 0; i < val; i++) {
        if ( i ** pow_ > val) {
            return i ** pow_
        }
    }
}

console.log(findNextPower(12385, 3))
console.log(findNextPower(1245678, 5))
console.log(findNextPower(4782969, 7))