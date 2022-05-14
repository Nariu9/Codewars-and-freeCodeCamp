function fakeBin(x){
   return x.replace(/[01234]/g, '0').replace(/[56789]/g, '1');
}

console.log(fakeBin('45385593107843568'));