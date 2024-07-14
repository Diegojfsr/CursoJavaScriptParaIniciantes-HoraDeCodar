

// arrow functions

const myArrowFunction = (a, b) => {
    return a + b;
}
console.log(myArrowFunction(2, 5));

const sumAlll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number
})
console.log(sumAlll);


//simplificando ainda mais a arrow function
const mySimpleArrowFunction = (a, b) => a + b;
console.log(mySimplearrowFunction(5, 5));
