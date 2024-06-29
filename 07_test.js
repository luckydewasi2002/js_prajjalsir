//factorial of 5
// const facto= (...nums)=>{
//     return nums.reduce((fact,nums)=>fact*nums,1)
// }
// console.log(facto(1,2,3,4,5))

//find the maximum of n numbers passed from function using reduce

// const maximum= (...nums)=>{
//     const max =1
//     return nums.reduce((max,nums)=>(nums>max? nums:max),1)
// }
// console.log(maximum(1,2,3,4,5))

// 3. pass more than one string argument from function and check whether
// the name prajjalis appear how many times

// const namecount = (...names) => {
//     const count=1;
//     return names.reduce((count, names) => {
//       if (names == "prajjal") return count + 1;
//       else return count;
//     }, 0);
//   };
  
//   console.log(namecount("prajjal","lax","prajjal","ravi"));
