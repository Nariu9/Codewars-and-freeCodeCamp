const numberJoy = (n) => {
    if (n.toString().length === 1) {
        return true
    }
    const digitSum = n.toString().split('').reduce((acc, el) => acc + +el, 0)
    const reversingSum = +digitSum.toString().split('').reverse().join('')

    return n === digitSum * reversingSum
}

console.log(numberJoy(1997))
console.log(numberJoy(1998))
console.log(numberJoy(1729))
console.log(numberJoy(18))
console.log(numberJoy(1))
console.log(numberJoy(81))
console.log(numberJoy(1458))