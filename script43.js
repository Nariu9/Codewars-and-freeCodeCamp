function spinWords(string){
   let arr = string.split(' ').map(word => word.split(''));
   let s = [];

   for (let i = 0; i < arr.length; i++) {
           if (arr[i].length > 4) {
               arr[i].reverse();
       }
           s.push(arr[i].join(''));
   }
    return s.join(' ');

}

spinWords("Just kidding there is still one more");