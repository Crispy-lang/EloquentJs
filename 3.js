// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
//   // → 60
// }
// // y is not visible here
// console.log(x + z);
// → 40


// function findSolution(target) {
//     function find(current, history) {
//       if (current == target) {
//         return history;
//       } else if (current > target) {
//         return null;
//       } else {
//         return find(current + 5, `(${history} + 5)`) ||
//                find(current * 3, `(${history} * 3)`);
//       }
//     }
//     return find(1, "1");
//   }
  
//   console.log(findSolution(50));
  // → (((1 * 3) + 5) * 3)


  function isEven(n){
      console.log(n)
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

  console.log(isEven(-1));
