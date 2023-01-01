function changer(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const vowels = 'aeiou'
    const arr = str.toLowerCase().split('').map(el => alphabet.includes(el) ? alphabet[alphabet.indexOf(el) + 1] : el)
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join('')
}

console.log(changer('Cat30'))
console.log(changer('Alice'))
console.log(changer('sponge1'))
console.log(changer('Hello World'))
console.log(changer('dogs'))
console.log(changer('z'))