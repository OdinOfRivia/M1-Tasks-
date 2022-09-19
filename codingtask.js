
//Coding task 1 
function printValue3(val){
    
    if(typeof val !== "number" ){
    return "invalid grade"
    }
    if(val === 100){
        return"perfect score"
    }if(val >= 70 && val < 100 ){
        return "passed";
    }if(val <= 69 && val >= 0){
        return "failed";
    }if(val < 0 || val > 100){
        return "invalid grade"
    }
}
console.log(printValue3(100));


//Coding task 2 
function evenOdd(val) {
    if(val < 0 || val > Number. POSITIVE_INFINITY){
        return "invalid number"
    }if(val % 2 == 0) {
        return"even"
    }if(val % 2 == 1) {
        return"odd"
    }if(typeof val !== "number" ){
        return "invalid number"
    }
}

console.log(evenOdd(2));


//Coding task 3 
function positiveOrNegative(val){
    if(val > 0){
        return "positive"
    }else if(val == 0){
        return "zero"
    }else{
        return "negative"
    } 
}

console.log(positiveOrNegative(-5));


//Coding task 4 
const person1 = {
      name: "John",
       age: 42
 }
     
const person2 = {
        name: "Odin",
         age: 14
 }

function isMinor(person){
     if(person.age >= 18)
         return "adult"
     if(person.age < 18) 
         return "minor"
     if(typeof person !== "object")
        return "invalid person"
    if(isNaN(person.age)){
        return "Invalid Person"
    }
    
}

console.log(isMinor(person1))
console.log(isMinor(person2))



//Coding task 5 

const String1 = "Gyunay"
const String2 = " is not 6 foot"
function string(P, Q){
    if(typeof Q !== "string" && typeof P !== "string"){
        return "invalid strings"
    }
    if(typeof P !== "string"){
        return "invalid string"
    }
    if(typeof Q !== "string"){
        return "invalid string"
    }
    return P + Q 
}  

console.log(string(String1, String2))







