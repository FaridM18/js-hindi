// Primitive datatypes

//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34655372645537744n



//Reference type(non primitive datatypes)

//Arrays,Objects,Functions

//array
const heros = ["shaktiman,:naagraj","doga"]

//objects
let myObj = {
    name:"hitesh",
    age:22,
}


//function

const myFunction = function(){
    console.log("hello world");

}


console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);



