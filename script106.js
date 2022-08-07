const foo = (str) => {
    return str
        ? (str.length % 2) === 0
            ? str.match(/.{1,2}/g)
            : `${str}_`.match(/.{1,2}/g)
        : []
}

console.log(foo(""))