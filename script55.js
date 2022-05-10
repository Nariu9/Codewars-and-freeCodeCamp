function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Greg', 'Daniel'));