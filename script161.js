function snail(column, day, night) {
    let days = 0
    while (column > night) {
        column = column - day + night
        days++
    }
    return days
}

console.log(snail(3,2,1))
console.log(snail(10,3,1))
console.log(snail(10,3,2))
console.log(snail(100,20,5))
console.log(snail(5,10,3))