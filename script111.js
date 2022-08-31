Array.prototype.remove_ = function (integer_list, values_list) {
   return  integer_list.filter(el => !values_list.includes(el))
}

let l = new Array()
integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8]
values_list = [1, 3, 4, 2]
console.log(l.remove_(integer_list, values_list))