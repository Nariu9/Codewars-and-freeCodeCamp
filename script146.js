const encryptThis = (str) => {
    if (!str) {
        return ''
    }
    const arr = str.split(' ')
    return arr.map(str => {
        switch (str.length) {
            case 1:
                return str.charCodeAt(0)
            case 2:
                return str.charCodeAt(0) + str.substring(1)
            default :
                return str.charCodeAt(0) + str[str.length - 1] + str.substring(2, str.length - 1) + str[1]

        }
    }).join(' ')
}

console.log(encryptThis(''))
console.log(encryptThis('A'))
console.log(encryptThis('A wise old owl lived in an oak'))
console.log(encryptThis('Hello'))
console.log(encryptThis('good'))
console.log(encryptThis('hello world'))