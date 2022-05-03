function titleCase(str) {
    let modStr = str.toLowerCase();
    return modStr.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));