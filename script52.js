String.prototype.toJadenCase = function () {
    const words = this.split(' ');

    return words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

