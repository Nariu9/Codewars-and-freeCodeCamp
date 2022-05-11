function narcissistic(value) {
    let arr = Array.from(String(value), Number);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(arr[i], arr.length);
    }
    return  value === result;
}

console.log(narcissistic( 7 ));