function add(num1, num2) {
    const arrA = Array.from(String(num1), Number)
    const arrB = Array.from(String(num2), Number)

    if (arrA.length > arrB.length) {
        while (arrA.length > arrB.length) {
            arrB.unshift(0)
        }
    } else if (arrB.length > arrA.length) {
        while (arrB.length > arrA.length) {
            arrA.unshift(0)
        }
    }

    return +arrA.map((el, i) => el + arrB[i]).join('')
}

console.log(add(16, 18)) // 214
console.log(add(26, 39)) // 515
console.log(add(122, 81)) // 1103