const flatten = (array) => {
    return array.reduce((acc, el)=> acc.concat(el), [])
}

console.log(flatten([1,2,3]))
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))
console.log(flatten([[[1,2,3]]]))