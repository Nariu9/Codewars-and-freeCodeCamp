function validParentheses(parens) {
    let arr = []
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            arr.push(parens[i])
        } else if (parens[i] === ')' && arr.length > 0){
            arr.pop()
        } else {
            return false
        }
    }
    return !arr.length
}

console.log(validParentheses("())("))