function recurrence(base, formula, term) {
    while (term > 1) {
        term--
        base = formula(base)
    }
    return base
}


console.log(recurrence(1, n => n + 3, 4))