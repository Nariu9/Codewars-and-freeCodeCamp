function inAscOrder (arr) {
    const sorted = [...arr].sort((a,b)=>a-b)
    return arr.every((value, index) => value === sorted[index])
}

console.log(inAscOrder([1,2,4,7,19])); // returns true
console.log(inAscOrder([1,2,3,4,5])); // returns true
console.log(inAscOrder([1,6,10,18,2,4,20])); // returns false
console.log(inAscOrder([9,8,7,6,5,4,3,2,1])); // returns false because the numbers are in DESCENDING order