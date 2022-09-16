const parse = (data) => {
    let value = 0
    let res = []
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case 'i':
                value++
                break
            case 'd':
                value--
                break
            case 's':
                value = value ** 2
                break
            case 'o':
                res.push(value)
                break
        }
    }
    return res
}

console.log(parse("iiisdoso"))