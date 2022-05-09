function persistence(num) {

    let count = 0;
    num = num.toString();
    while (num.length > 1) {
        count++;
        num = Array.from(num, Number).reduce((a, b) => a * b).toString();
    }

    return count;

}

console.log(persistence(999));



