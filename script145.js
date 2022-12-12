String.prototype.camelCase = function () {
    if (!this.trim()) {
        return ''
    }
    const arr = this.trim().split(' ')
    return arr.map(str => str[0].toUpperCase() + str.substring(1)).join('')
}

console.log('hello case'.camelCase())
console.log('camel case word'.camelCase())
console.log(''.camelCase())