function createPhoneNumber(numbers){
   /* let phone = numbers.join("");
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');*/
    return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));