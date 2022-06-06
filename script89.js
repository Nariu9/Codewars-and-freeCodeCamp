const reverseSeq = n => {
    let arr = []
    while (n>0) {
        arr.push(n)
        n--
    }
    return arr
};

console.log(reverseSeq(5))
