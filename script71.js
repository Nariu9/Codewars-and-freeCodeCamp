var humanYearsCatYearsDogYears = function(humanYears) {
  let years = [];
  if (humanYears === 1) {
    years[0] = humanYears;
    years[1] = 15;
    years[2] = 15;
  } else if (humanYears === 2) {
    years[0] = humanYears;
    years[1] = 24;
    years[2] = 24;
  } else {
    years[0] = humanYears;
    years[1] = 15 + 9 + 4 * (humanYears - 2);
    years[2] = 15 + 9 + 5 * (humanYears - 2);
  }
  return years;
}

console.log(humanYearsCatYearsDogYears(10));