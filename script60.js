function areYouPlayingBanjo(name) {
    return name.charAt(0) === 'R' || name.charAt(0) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rolf"));