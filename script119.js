function alexMistakes(numberOfKata, timeLimit) {
    let restTime = timeLimit - numberOfKata * 6
    let push = 5
    let times = 0
    while (restTime >= push) {
        restTime -= push
        push *= 2
        times++
    }
    return times
}

console.log(alexMistakes(10, 120))  //3
console.log(alexMistakes(11, 120))  //3
console.log(alexMistakes(3, 45))  //2
console.log(alexMistakes(8, 120))  //3
console.log(alexMistakes(6, 60))  //2
console.log(alexMistakes(9, 180))  //4

/*
Алекс может выполнить десять ката за час, но когда он совершает ошибку, ему приходится отжиматься. Эти отжимания очень утомляют бедного Алекса, поэтому каждый раз, когда он их делает, они занимают в два раза больше времени. Первая серия отжиманий для искупления занимает 5 минут. Создайте функцию alexMistakes, которая принимает два аргумента: количество ката, которые Алекс должен выполнить, и время в минутах, которое он должен потратить на их выполнение. Ваша функция должна возвращать количество ошибок, которые Алекс может позволить себе сделать.*/

// 1 - 5 / 2 - 10 / 3 - 20 / 4 - 40