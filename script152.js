function discoverOriginalPrice(discountedPrice, salePercentage) {
    const res = discountedPrice / ((100 - salePercentage) / 100)
    return +(res % 1).toFixed(2) === 0 ? Math.round(res) : +res.toFixed(2)
}

console.log(discoverOriginalPrice(75, 25))
console.log(discoverOriginalPrice(25, 75))
console.log(discoverOriginalPrice(75.75, 25))