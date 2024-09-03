   // array

 const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hanuman", "Shaktiman"]

 const myArr2 = new Array(1,2,3,4)
// console.log(myArr[4]);

// Array methods

  // push ka use add krne ke liye
 // pop ka use use value ko remove baki sbko print


//let myArr = [0,1,2,3,4,5,]; // Initialize the array
// myArr.push(6);  
// myArr.push(7);
// myArr.pop();  
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log( newArr);

// slice ,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log(" B",myArr);
const myn2 = myArr.splice(1,3)
console.log(" C ",myArr);
console.log(myn2);