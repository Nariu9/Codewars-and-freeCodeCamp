function findOutlier(integers){
    const odds = integers.filter(num => {
        return num % 2 !== 0;
    });

    const evens = integers.filter(num => {
        return num % 2 === 0;
    });

    return odds.length > evens.length ? evens[0] : odds[0];

}

console.log(findOutlier([1,1,0,1,1]));