function findShort(s){
    const arr = s.split(' ').sort((a, b) => a.length - b.length);
    return arr[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))