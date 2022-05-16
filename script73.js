function sortByLength (array) {
  return  array.sort((a, b) => {
      return a.length - b.length;
  });
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))