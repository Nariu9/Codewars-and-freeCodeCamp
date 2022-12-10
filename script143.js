'use strict'

function isInStrictMode() {
    return !this
}

console.log(isInStrictMode())