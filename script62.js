function isPangram(string){
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'],
        str = string.toLowerCase().split('');
    return alphabet.every(elem => str.includes(elem));

}

console.log(isPangram("This is not a pangram."))