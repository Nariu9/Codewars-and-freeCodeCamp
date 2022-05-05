var uniqueInOrder=function(iterable){
    let someArr;
    if (Array.isArray(iterable)) {
        someArr = iterable;
    } else {
        someArr = iterable.split('');
    }
    return someArr.filter((elem, i) => {
       return someArr[i] !== someArr[i + 1];
   });
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));

/*
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/
