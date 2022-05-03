function mutation(arr) {
    let arrOfStr1 = arr[0].toLowerCase().split(""),
        arrOfStr2 = arr[1].toLowerCase().split("");

    return arrOfStr2.every(elem => arrOfStr1.includes(elem));



    /*for (let i=0; i < arrOfStr2.length; i++) {
        if (arrOfStr1.indexOf(arrOfStr2[i]) > -1) {
            return true;
        } else {
            return false;
        }
    }*/
}

console.log(mutation(["hello", "Hello"]));