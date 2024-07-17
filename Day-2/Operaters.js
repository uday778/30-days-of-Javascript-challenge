

///Arthmetic Operators
// Task 1
let num1=10;
var num2=20;
let addition= num1+num2;
console.log(addition);

// Task-2
const sub1=10;
const sub2=40;
let subtraction= num1-num2;
console.log(subtraction);

//Task-3
const multi1=10;
const multi2=40;
let multiply= multi1*multi2;
console.log(multiply);

// Task-4
let div1 = 10;
let div2 = 2;
let result = div1 / div2;
console.log("The result of dividing " + div1 + " by " + div2 + " is: " + result);

// Task-5
let rem1=10
const rem2=6

let results=rem1%rem2
console.log("the remainder of dividing  "+ rem1+ "  by  "+rem2+"  is  :"+ results);


//Assignment Operators
//Task-6
let hit=6
let output=hit += num1+num2
console.log(output);

//Task-7
let oper=6
let output2=oper -= num1+num2
console.log(output2);

//Comparision Operators
//Task-8
num1=10
num2=20
let com=num1<num2
console.log(com);

let comp=num1>num2
console.log(comp);

//Task-9
num1=10
num2=10
let lessequal=num1<=num2
console.log(lessequal);

num1=20
num2=10
var greatequal=num1<=num2
console.log(greatequal);


// Task-10
num1=10
num2=10
let task10=num1==num2
console.log(task10);

num1=10
num2="10"
let task10k=num1===num2
console.log(task10k);

// Logical Operators
//Task-11
num1=10
num2=20

let cond1=num1>0
let cond2=num2<10

if (cond1 && cond2) {
    console.log("Both conditions are true: num1 is greater than 0 and num2 is less than 10.");
} else {
    console.log("One or both conditions are false.");
}

//Task-12
num1=10
num2=20
let condition1=num1>0
let condition2=num2<10
if (condition1 || condition2) {
    console.log("Both conditions are true: num1 is greater than 0 and num2 is less than 10.");
}



//Task-13
num1=10
num2=20
let cond13=num1>0
let cond12=num2<10
let task13=(!cond12 && !cond13)
console.log(task13);

// Task-14
let ternary=-20
const response=ternary>0?("positive"):("negative")
console.log(response);





