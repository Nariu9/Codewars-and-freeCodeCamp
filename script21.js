function findUniq(arr) {
   const uniq = [...new Set(arr)];
    console.log(uniq);
   for (let i = 0; i < uniq.length; i++) {
       if (uniq[i] === arr[i] && uniq[i] === arr[i+1]) {
           return uniq[i+1];
       } else if (uniq[i] === arr[i] && uniq[i] === arr[i+2]) {
           return uniq[i+1];
       } else {
           return  uniq[i];
       }
   }
}
let numbers = [ 3, 10, 3, 3, 3 ]

console.log(findUniq(numbers))

