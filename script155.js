function rgb(r, g, b) {
    const res = []
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] <= 0) {
            res.push(['00'])
        } else if (arguments[i] >= 255) {
            res.push('FF')
        } else {
            const hexNum = arguments[i].toString(16).toUpperCase()
            res.push(hexNum.length > 1 ? hexNum : 0 + hexNum)
        }
    }
    return res.join('')
}

console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(0, 0, 0))
console.log(rgb(148, 0, 211))
console.log(rgb(0, 0, -20))
console.log(rgb(173, 255, 47))
console.log(rgb(45, 22, 15))