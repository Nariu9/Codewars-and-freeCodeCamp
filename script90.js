function digitize(n) {
   return  Array.from(String(n), Number).reverse()
}

console.log(digitize(35231))