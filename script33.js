function chunkArrayInGroups(arr, size) {
    let someArr = [],
        count = arr.length/size;

    for (let i = 0; i < count; i++) {
        someArr.push([]);
        someArr[i] = arr.splice(0, size);
    }
    return someArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);