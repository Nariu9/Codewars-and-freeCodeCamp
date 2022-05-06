function digital_root(n) {
   let firstSum = Array.from(String(n), Number).reduce((a,b) => a + b);

   do {
       firstSum = Array.from(String(firstSum), Number).reduce((a,b) => a + b);
   } while (firstSum > 9);

   return firstSum;
}

    console.log(digital_root(493193));
