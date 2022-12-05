const removeSmallest = (numbers) => {
    if (numbers.length) {
        const arr = [...numbers]
        const smallest  = Math.min(...arr)
        arr.splice(arr.indexOf(smallest), 1)
        return arr
    }
    return numbers
}

console.log(removeSmallest([]))
console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([5,3,2,1,4]))
console.log(removeSmallest([2,2,1,2,1]))