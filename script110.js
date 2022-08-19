function toAcronym(inp){
   return  inp.split(' ').map(el=>el.charAt(0).toUpperCase()).join('')
}

console.log(toAcronym("Portable Network Graphics"))