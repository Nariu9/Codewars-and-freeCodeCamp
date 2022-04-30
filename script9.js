// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str) {
//     console.log(str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr) {
//         return chr.toUpperCase();
//     }));

//     // console.log(str.replace(/[_-]/g, ""));
// }

function toCamelCase(str) {
    console.log(str.split(/[-_]/).map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));

}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");