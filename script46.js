function arrayDiff(a, b) {
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--)
            if (a[i] === b[j]) {
                a.splice(i,1);
        }
    }
    return a;
}

console.log(arrayDiff([1,2,2,2,3],[2]));