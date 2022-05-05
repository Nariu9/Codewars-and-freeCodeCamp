function countSmileys(arr) {
    let count = 0;
    arr.forEach((elem, i, arr) => {
        if (/([;:])([-~])?([)D])/g.test(elem)) {
            count ++;
        } else if (arr.length === 0) {
            return 0;
        }
    });
    return count;
}
countSmileys([';D', ':-(', ':-)', ';~)']);
