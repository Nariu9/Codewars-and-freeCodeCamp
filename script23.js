function confirmEnding(str, target) {
    return str.slice(0 - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));