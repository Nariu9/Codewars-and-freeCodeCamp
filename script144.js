const prevMultOfThree = n => {
    while (n >= 3) {
        if (n % 3 === 0) {
            return n
        }
        n = Math.floor(n / 10)
    }
    return null
}

console.log(f1(1))
console.log(f1(25))
console.log(f1(36))
console.log(f1(1244))
console.log(f1(952406))