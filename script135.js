function lastSurvivor(letters, coords) {
  const arrOfLetters = letters.split('')
  coords.forEach(el=> arrOfLetters.splice(el, 1))
  return arrOfLetters.join(',')
}

console.log(lastSurvivor("zbk", [0, 1]))