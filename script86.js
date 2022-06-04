function solution(nums){
  return nums !== null && nums.length > 0 ? nums.sort((a, b) => a - b) : []
}

console.log(solution([1,2,3,10,5]))