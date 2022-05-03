function bouncer(arr) {
    let someArr = []
    arr.forEach((elem) => {
        if (Boolean(elem)) {
            someArr.push(elem);
        }
    });
    return someArr;
}

console.log(bouncer([7, "ate", "", false, 9]));