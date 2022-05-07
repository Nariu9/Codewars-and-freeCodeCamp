function humanReadable (seconds) {

    let h = Math.floor(seconds / (60 * 60)),
        m = Math.floor((seconds / 60) % 60),
        s = Math.floor(seconds % 60);

    let addZero = function (num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

console.log(humanReadable(45296));