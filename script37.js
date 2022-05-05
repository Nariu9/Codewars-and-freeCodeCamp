function find_average(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array.reduce((a,b) => {return a+b;})/array.length;
    }
}

console.log(find_average([1,2,3,4]));