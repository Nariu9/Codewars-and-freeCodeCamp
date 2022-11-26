const unscrambleEggs = (word) => {
  return  word.split('egg').join('')
}

console.log(unscrambleEggs('Beggegeggineggneggeregg'))
console.log(unscrambleEggs('ceggodegge heggeregge'))
console.log(unscrambleEggs('FeggUNegg KeggATeggA'))