function cakes(recipe, available) {
    const res = []
    if (Object.keys(recipe).every(el => Object.keys(available).includes(el))) {
        for (const recipeKey in recipe) {
            if (recipeKey in available) {
                res.push(Math.floor(available[recipeKey] / recipe[recipeKey]))
            }
        }
        return res.sort((a, b) => a - b)[0]
    }
    return 0
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))