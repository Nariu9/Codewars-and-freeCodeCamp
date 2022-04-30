function filter_list(l) {
    const numbers = l.filter(element => {
        return typeof(element) === 'number'
    })
    return (numbers);
}

filter_list([1, 2, 'a', 'b'])
filter_list([1, 'a', 'b', 0, 15])
filter_list([1, 2, 'aasf', '1', '123', 123])