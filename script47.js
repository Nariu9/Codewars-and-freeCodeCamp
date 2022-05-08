var countBits = function(n) {
    let x = n.toString(2).replace(/0/g, "");
    return x.length;
};

console.log(countBits(1234))