function getIndexToIns(arr, num) {
    if (arr.length === 0) {
        return 0;
    }
    arr.sort((a, b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i] && num < arr[i+1]) {
            return (i+1);
        } else if (num === arr[i]) {
            return i;
        } else if (num > arr[arr.length-1]) {
            return arr.length;
        }
    }
}

console.log(getIndexToIns([], 1));