function findOdd(A) {
    let count = {};
    for(let i = 0; i < A.length; i++) {
        if (count[A[i]]) {
            count[A[i]] += 1;
        } else {
            count[A[i]] = 1;
        }
    }
    for (let prop in count) {
        if (count[prop]%2 !== 0){
            return +prop;
        }
    }
}

console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]));