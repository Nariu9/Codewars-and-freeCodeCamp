function mostFrequentItemCount(collection) {
    if (collection.length) {
        const store = {}
        collection.forEach((num) => store[num] ? store[num] += 1 : store[num] = 1)
        return Object.values(store).sort((a, b) => b - a)[0]
    }
    return 0
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))