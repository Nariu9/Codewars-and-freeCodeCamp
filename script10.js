// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// 1) проверить посимвольно соответствует ли строка с дина строки1 минус длина строки2 по длина строки 1 строке2  

// function solution(str, ending) {
//     if (str.indexOf(ending, str.length - ending.length) >= 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

function solution(str, ending) {
    return str.indexOf(ending, str.length - ending.length) >= 0;
}


console.log(solution('abc', 'bc'));