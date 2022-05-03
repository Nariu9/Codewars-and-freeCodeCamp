function frankenSplice(arr1, arr2, n) {
    let someArr = [...arr2];
    someArr.splice(n,0, ...arr1);
    return someArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);