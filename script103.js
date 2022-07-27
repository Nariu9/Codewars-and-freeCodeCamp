const solve = (a, b) => {
    if (a === 0 || b === 0) {
        return [a, b]
    } else if (a >= 2 * b) {
        a = a - 2 * b
        return solve(a, b)
    } else if (b >= 2 * a) {
        b = b - 2 * a
        return solve(a, b)
    } else {
        return [a, b]
    }
}

console.log(solve(6, 19))