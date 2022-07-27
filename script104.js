/*const factorial = n => {
    if (n) {
        return n * factorial(n - 1)
    } else {
        return 1
    }
};*/

function facRecursion(value) {
    if (value < 0) return 0;
    else if (value <= 1) return 1;
    return value * facRecursion(value - 1);
}

console.log(facRecursion(4))


/*
function facRecursion(value){
    if(value > 0)
        return 0;
    if(value = 1 | value = 0)
        return 1;
}
return facRecursion(value - 1);
}*/
