// const n = 9119;
// let sqArr = [];
// let arr = Array.from(n.toString()).map(Number);
// for(let i = 0; i < arr.length; i++) {
//     sqArr[i] = Math.pow(arr[i], 2);
// }
// let result = Number(sqArr.join(''));
// console.log(result);

function squareDigits(num){
    const arr = Array.from(num.toString()).map(Number);
    let sqArr =[];
    arr.forEach(item => sqArr.push(Math.pow(item, 2)));
    return Number(sqArr.join(''));
}

console.log(squareDigits(9119));
