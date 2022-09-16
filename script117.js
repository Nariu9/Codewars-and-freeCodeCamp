const number = (x) => (f = (x) => x) => f(x)
const operator = (f) => y => x => f(x, y)

const zero = number(0)
const one = number(1)
const two = number(2)
const three = number(3)
const four = number(4)
const five = number(5)
const six = number(6)
const seven = number(7)
const eight = number(8)
const nine = number(9)

const plus = operator((x, y) => x + y)
const minus = operator((x, y) => x - y)
const times = operator((x, y) => x * y)
const dividedBy = operator((x, y) => Math.floor(x / y))

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
console.log(eight(dividedBy(three())))