const cleanString = (s) => {
    const res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            res.push(s[i])
        } else {
            res.pop()
        }
    }
    return res.join('')
}

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc##d######'))
console.log(cleanString('#######'))
console.log(cleanString(''))