function removeUrlAnchor(url){
   return  url.replace(/#.*/, '')
}

console.log(removeUrlAnchor("www.codewars.com#about"))