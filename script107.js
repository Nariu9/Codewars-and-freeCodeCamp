const comp = (array1, array2) => {
    if (array1 && array2 && array1.length === array2.length) {
        array1.sort((a, b) => a - b)
        array2.sort((a, b) => a - b)
        return array1.map(el => el * el).every((el, i) => el === array2[i])
    }
    return false
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))