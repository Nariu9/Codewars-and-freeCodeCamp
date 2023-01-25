function solve(s) {
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]

    const consonantArr = s.replace(/[aeiou]/g, ' ').split(' ').filter(el => el !== '')
    const valuesArr = consonantArr.map(el => el.length === 1 ? alphabet.indexOf(el) + 1 : Array.from(el).reduce((acc, el) => acc + alphabet.indexOf(el) + 1, 0))

    return valuesArr.reduce((a, b) => Math.max(a, b))
}

console.log(solve('zodiacs'))
console.log(solve('strength'))
console.log(solve('chruschtschov'))
console.log(solve('khrushchev'))
console.log(solve('twelfthstreet'))
console.log(solve('mischtschenkoana'))