function DNAStrand(dna){
    const letters = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }
   return dna.length === 0 ? [] : dna.replace(/[A-Z]/g, i => letters[i]);
}

console.log(DNAStrand("GTAT"))