function count (string) {
    let res = {}
    if (string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            let count = 0
            for (let j = 0; j < string.length; j++) {
                if (string[i] === string[j] && i > j) {
                    break
                } else if (string[i] === string[j]) {
                    count++
                }
            }
            if (count > 0) {
                res[string[i]] = count
            }
        }
    }
    return res
}

console.log(count(""))