function generateHashtag(str) {
    if (str) {
        let hashtag = '#' + str.split(' ').filter(str => str.length !== 0).map(str => str[0].toUpperCase() + str.substring(1)).join('')
        return hashtag.length <= 140 && hashtag.length > 1 ? hashtag : false
    }
    return false
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'))
console.log(generateHashtag('    Hello     World   '))
console.log(generateHashtag(''))
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'))