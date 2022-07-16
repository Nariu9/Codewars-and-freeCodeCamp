function divisors(integer) {
   let result = []
   for (let i = 2; i < integer - 1; i++) {
      if (Number.isInteger(integer/i)) {
         result.push(i)
      }
   }
   return result.length ? result : `${integer} is prime`
}

console.log(divisors(25))