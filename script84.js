function uniqueSum(lst) {
    return lst.length > 0 ? [...new Set(lst)].reduce((sum, current) => sum + current, 0) : null
}

console.log(uniqueSum([]))