function flyBy(lamps, drone){
    let res = lamps.split('')
    for (let i = 0; i < drone.length; i++) {
        if (res[i]) {
            res[i] = 'o'
        }
    }
    return res.join('')
}

console.log(flyBy('xxxxxx', '====T'))
console.log(flyBy('xxxxxxxxx', '==T'))
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'))