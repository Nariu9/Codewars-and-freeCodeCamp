function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)**2 : -1

}

console.log(findNextSquare(114))