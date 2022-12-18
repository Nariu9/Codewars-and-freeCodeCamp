function capitalize(s) {
    return [s.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join(''), s.split('').map((char, i) => i % 2 === 1 ? char.toUpperCase() : char).join('')]
}

console.log(capitalize('abcdef'))