const hasSurvived = (attackers, defenders) => {
    const survAttackers = attackers.map((el, i) => defenders[i] ? el - defenders[i] : el).filter(el => el > 0)
    const survDefenders = defenders.map((el, i) => attackers[i] ? el - attackers[i] : el).filter(el => el > 0)
    if (survAttackers.length === survDefenders.length) {
        const attackersInitPower = attackers.reduce((acc, el) => acc + el, 0)
        const defendersInitPower = defenders.reduce((acc, el) => acc + el, 0)
        return defendersInitPower > attackersInitPower || defendersInitPower === attackersInitPower
    }
    return survDefenders.length > survAttackers.length
}

console.log(hasSurvived([ 1, 3, 5, 7 ], [ 2, 4, 6, 8 ]))
console.log(hasSurvived([ 1, 3, 5, 7 ], [ 2, 4 ]))
console.log(hasSurvived([ 1, 3, 5, 7 ], [ 2, 4, 0, 8 ]))