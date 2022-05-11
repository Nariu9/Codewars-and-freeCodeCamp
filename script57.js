function getCount(str) {
 let vowels = 'aeiou';
 let vowelsCount = 0

 for (let i = 0; i < str.length; i++) {
  if (vowels.indexOf(str[i]) !== -1) {
    vowelsCount++;
  }
 }
 return vowelsCount;
}

console.log(getCount("my pyx"));