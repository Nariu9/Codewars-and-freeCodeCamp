const high = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const arrOfWords = str.split(' ')
    const arrOfSums = arrOfWords.map(el => [...el].reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0))
    let wordIndex = 0
    for (let i = 1; i < arrOfWords.length; i++) {
        if (arrOfSums[i] > arrOfSums[wordIndex]) {
            wordIndex = i
        }
    }
    return arrOfWords[wordIndex]
}
console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))
console.log(high('take me to semynak'))
console.log(high('massage yes massage yes massage'))
console.log(high('take two bintang and a dance please'))
console.log(high('aa b'))
console.log(high('b aa'))
console.log(high('bb d'))
console.log(high('d bb'))
console.log(high('aaa b'))