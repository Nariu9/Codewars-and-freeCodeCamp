// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let newStr = '';
    for (i = 0; i <= text.length; i++) {
        switch (text.toLowerCase().charAt(i)) {
            case 'a':
                newStr += ' 1';
                break;
            case 'b':
                newStr += ' 2';
                break;
            case 'c':
                newStr += ' 3';
                break;
            case 'd':
                newStr += ' 4';
                break;
            case 'e':
                newStr += ' 5';
                break;
            case 'f':
                newStr += ' 6';
                break;
            case 'g':
                newStr += ' 7';
                break;
            case 'h':
                newStr += ' 8';
                break;
            case 'i':
                newStr += ' 9';
                break;
            case 'j':
                newStr += ' 10';
                break;
            case 'k':
                newStr += ' 11';
                break;
            case 'l':
                newStr += ' 12';
                break;
            case 'm':
                newStr += ' 13';
                break;
            case 'n':
                newStr += ' 14';
                break;
            case 'o':
                newStr += ' 15';
                break;
            case 'p':
                newStr += ' 16';
                break;
            case 'q':
                newStr += ' 17';
                break;
            case 'r':
                newStr += ' 18';
                break;
            case 's':
                newStr += ' 19';
                break;
            case 't':
                newStr += ' 20';
                break;
            case 'u':
                newStr += ' 21';
                break;
            case 'v':
                newStr += ' 22';
                break;
            case 'w':
                newStr += ' 23';
                break;
            case 'x':
                newStr += ' 24';
                break;
            case 'y':
                newStr += ' 25';
                break;
            case 'z':
                newStr += ' 26';
                break;
            default:
                break;
        }
    }
    return newStr.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// const str = 'Hello world!';
// const mapString = (str) => {
//    const mappedArray = [];
//    str
//    .trim()
//    .toLowerCase()
//    .split("")
//    .forEach(char => {
//       const ascii = char.charCodeAt();
//       if(ascii >= 97 && ascii <= 122){
//          mappedArray.push(ascii - 96);
//       };
//    });
//    return mappedArray;
// };
// console.log(mapString(str));