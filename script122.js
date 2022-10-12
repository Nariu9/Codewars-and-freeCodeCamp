function pigIt(str) {
    return str.split(' ').map(word => word !== '!' && word !== '?' ? word.substring(1) + word[0] + 'ay' : word).join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))