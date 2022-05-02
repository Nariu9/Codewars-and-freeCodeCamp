function sumArray(array) {
    if (array === null || array === [] || array === undefined || array.length <= 1) {
        return 0;
    } else {
        let sum = 0,
            smallArr;
        array.sort((a, b) => {
            return a - b;
        });
        smallArr = array.slice(1, array.length-1);
        for (let i = 0; i < smallArr.length; i++) {
            sum += smallArr[i];
        }
        return(sum);
    }
}
sumArray([ -6, -20, -1, -10, -12 ])
