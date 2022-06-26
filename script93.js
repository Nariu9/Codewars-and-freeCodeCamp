function getMiddle(s) {
    return s.length % 2 ? s.charAt(s.length - 1 - Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1)
}


console.log(getMiddle("middle"))