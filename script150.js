function solve(s) {
    const res = {
        low: 0,
        up: 0
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            res.low += 1
        } else {
            res.up += 1
        }
    }
    return res.low >= res.up ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('coDe'))
console.log(solve('CODe'))
console.log(solve('coDE'))