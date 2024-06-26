// 1.=> aapko arrow function ke madad se 4 input lena hai aur uska sum calculate karna hai'

// let calculatesum = (a,b,c,d,e)=> a+b+c+d+e;



// let sum = calculatesum(10,20,30,40,50);
// console.log(`sum: ${sum}`)

//-----------------------------------------------
//2.=>using annoymous arrow function create a function which does factorial of 5 

// let fact =(n)=>{
//         let fact=1;
//         for(let i=1;i<=n;i++){
//             fact=fact*i
//         }
//         console.log(fact)
//     }
//     let factorial = fact(5);
   
//----------------------------------------------------
//3.=>use the concept of hoisiting and call a factorial function without declaring it and then define after calling

// const result = factorial(5);
// console.log(result);

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
   
   
// }

//------------------------------------------------------
//4.=> use the concept of immediately invoked function to check whether a number is even or odd. 

// function evenodd(n){
//     if(n%2 === 0){
//         console.log("even number" )
//     }
//     else{
//         console.log("odd number")
//     }
// }evenodd(15);

//--------------------------------------------------------------------
//5.=>using the concept of parameterised function constructor call factorial function

// const factorial = new Function('n', `
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * arguments.callee(n - 1);
//     }
// `);


// const result = factorial(5);
// console.log(result); 

