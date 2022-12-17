class Kata {
    static findLongest(array) {
        let subArr = `${array[0]}`.split('')
        for (let i = 1; i < array.length; i++) {
            if (`${array[i]}`.split('').length > subArr.length) {
                subArr = `${array[i]}`.split('')
            }
        }
        return Number(subArr.join(''))
    }
}

console.log(Kata.findLongest([1, 10, 100]))
console.log(Kata.findLongest([9000, 8, 800]))
console.log(Kata.findLongest([8, 900, 500]))