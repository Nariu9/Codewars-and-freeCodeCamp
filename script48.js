function duplicateCount(text){
    let count = {},
        counter = 0;

   text.toLowerCase().split('').forEach(elem => {
       count[elem] ? count[elem]++ : count[elem] = 1;
   });

    for (let key in count) {
        if (count[key] > 1) {
            counter++;
        }
    }

    return counter;
}

console.log(duplicateCount("Indivisibilities"));