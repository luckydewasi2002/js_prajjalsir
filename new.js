function findmin(...nums){
    
let min = 0;
    nums.reduce((min,nums)=>min<nums?nums:min);
}
console.log(findmin(1,2,3,4,5,6))

