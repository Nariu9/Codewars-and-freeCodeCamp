function nthFibo(n) {
    const res = [0, 1]
    for (let i = 2; i <= n; i++) {
        res.push(res[i-2] + res[i - 1])
    }
    return res[n-1]
}

console.log(nthFibo(1))
console.log(nthFibo(2))
console.log(nthFibo(3))
console.log(nthFibo(4))
console.log(nthFibo(7))