//Function as a type 


function sum(num1:number, num2:number) {
    return num1 + num2; 
}


let mySum: (x:number, y:number) => number;  


mySum = sum;

console.log(mySum(2,3));