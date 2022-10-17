function firstNonRepeatingLetter(s) {
    const res = []
    s
        .toLowerCase()
        .split('')
        .forEach((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) && res.push(i))
    return res.length ? s.charAt(res[0]) : ''
}

console.log(firstNonRepeatingLetter('sTtrreeSS'));