function findChildren(dancingBrigade) {
    return dancingBrigade.split('').sort((a, b) => {
        const lowA = a.toLowerCase()
        const lowB = b.toLowerCase()
        return lowA.localeCompare(lowB) || b.localeCompare(a)
    }).join('')
}

console.log(findChildren('beeeEBb'))
console.log(findChildren('uwwWUueEe'))
console.log(findChildren('abBA'))
console.log(findChildren('AaaaaZazzz'))
console.log(findChildren('CbcBcbaA'))
console.log(findChildren('xXfuUuuF'))