// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//     const newStr = str.split(' ').map(word => word.split('').reverse().join(''))
//     console.log(newStr.join(' '));
// }

function reverseWords(str) {
    console.log(str.split(' ').map(word => word.split('').reverse().join('')).join(' '));
}

reverseWords("The quick brown fox jumps over the lazy dog.");