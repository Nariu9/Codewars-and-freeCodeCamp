function largestOfFour(arr) {
    let maxArr = [];
    arr.forEach(item => item.sort((a, b) => b - a));
    for (let i = 0; i < arr.length; i++) {
        maxArr.push(arr[i][0]);
    }
    return maxArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
