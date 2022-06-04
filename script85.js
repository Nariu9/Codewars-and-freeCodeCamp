function descendingOrder(n){
  return  n > 9 ? parseInt(Array.from(String(n)).sort((a, b) => b - a).join('')) : n
}

console.log(typeof descendingOrder(111))