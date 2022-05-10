function betterThanAverage(classPoints, yourPoints) {

    return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints;

}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));