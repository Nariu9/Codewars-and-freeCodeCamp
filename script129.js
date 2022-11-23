function isIsogram(str){
    let lowStr = str.toLowerCase()
    for (let i = 0; i < lowStr.length; i++) {
        if (lowStr.indexOf(lowStr[i]) !== lowStr.lastIndexOf(lowStr[i])) {
            return false
        }
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"))