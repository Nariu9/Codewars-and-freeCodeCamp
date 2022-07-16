function solution(string) {
   return string.length > 0 ? string.replace(/([A-Z])/g, ' $1') : ''
}

console.log(solution("camelCasing"))