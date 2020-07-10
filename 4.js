// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index +1 , array.length -1));
// }
// console.log(remove(["a", "b", "c", "d", "e","f","j","h","i"], 2));
// // → ["a", "b", "d", "e"]


// rangr function

// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// function range(start, end, step=-1){
//   const sum = []
//   if(step > 0) {
//     for(let i = start; i <= end; i += step){
//       sum.push(i)
//     }
//   }else{
//     for(let i = start; i >= end; i += step){
//       sum.push(i)
//     }
//   }
//   return sum
// }
//
// console.log(range(23, 10))

// reverse an array
// function reverse(array){
//   const output = []
//   for(let i = array.length ; i > 0; i-=1){
//     output.push(i)
//   }
//   return output
// }
//
// console.log(reverse([3,4,5,6,7,8]))

// reverseInPlace
// const values = [3,4,5,6,7,8]
//
// function reverseInPlace(values){
//   for(let i = 0; i <= Math.floor(values.length / 2); i += 1){
//     let old = values[i]
//     values[i] = values[values.length - 1 - i]
//     values[values.length - 1 - i] = old
//   }
//   return values
// }
// reverseInPlace(values)
// console.log(values)

// function arrayToList(array){
//   let output = null
//   for(let i in array){
//     output = {
//       value: array[i],
//       rest: output
//     }
//   }
//   return output
// }
//
// function listToArray(list){
//   array = []
//   for(let node = list; node; node = node.rest ){
//     array.push(node.value)
//   }
//   return array
// }
//
// function nth(list, n){
//   if(!list) undefined
//   if(n == 0) return list.value
//   return nth(list.rest, 3)
// }
//
// console.log(nth(arrayToList([10, 20, 30, 40, 50, 60]), 0));

const obj1 = {
  a:1
}
const obj2 = {
  b:5
}

function deepEqual(a, b){
  if (a === b) return true;
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
}

console.log(deepEqual(obj1, obj2))
