

// Ascending_numbers
console.log("Ascending_numbers")


//return true if the array of numbers is sorted in ascending order else return false
//consider that there are no duplicated numbers

function isSortedAsc(arr){
    for(let i = 1; i < arr.length; i++){
        
        if(arr[i] < arr[i - 1]){
            return false
        }
        
    }
    return true
}


console.log(isSortedAsc([1,2,3,4,5]))
console.log(isSortedAsc([1,2,7,4,5]))

console.log("------------------------------")




//REVERSE A STRING
console.log("!!!REVERSE A STRING")
// toy ---> yot 
// ['t','o','y']


function reverse(str){
    return str.split("").reverse().join(""); 
}

console.log(reverse('olleh')) //olleh
console.log(reverse('racecar')) //racecar
console.log(reverse('word')) //drow

console.log("------------------------------")





//SEARCH ARRAY 
console.log("!!! Returns true if the given array contains the given value")

//returns true if the given array contains the given value
// contains([1,2,3,4,5], 5) //true
// contains([1,2,3,4,5], 7) //false

function contains(arr, value){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return "True"; 
        }
    }
    for(let i = 0; i < arr.length; i++){
        if (arr[i] !== value){
            return "False"; 
        }
    }
}


console.log(contains([1,2,3,4,5], 7))
console.log(contains([1,2,3,4,5], 2))
console.log("------------------------------")




// DETERMINE WHETHER ALL CHARACTERS IN A STRING ARE UNIQUE OR NOT 
console.log("!!! DETERMINE WHETHER ALL CHARACTERS IN A STRING ARE UNIQUE OR NOT")
 
//  * Make it case-sensitive, meaning a string with both 'a' and 'A'
//  * could pass the test
 

function isUnique(str) {
  // If at any time we encounter 2
    // same characters, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    // If no duplicate characters
    // encountered, return true
    return true;
}



console.log(isUnique('abcdef')); // -> true
console.log(isUnique('89%df#$^a&x')); // -> true
console.log(isUnique('abcAdef')); // -> true
console.log(isUnique('abcaef')); // -> false

console.log("------------------------------")





// ANAGRAM 
console.log("!!! Anagram")


//'hello' --> 'olleh' is an anagram
//'hello' ---> 'lloh' is not an anagram


function anagram(str1, str2){

    // We take the string and we turn it into an array then we sort it, after that we join it together and convert it 
    // to lower case.  
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase(); 
    // now we compare the two srings
    return (sorted1 === sorted2); 

}

console.log(anagram('hello','olleh'))
console.log(anagram('a gentleman','elegant man'))
console.log(anagram('bad credit','debit card'))
console.log(anagram('dog','gdf'))
// console.log(anagram('eleven plus two','twelve plus one'))
// console.log(anagram('Tom marvolo riddle','i am lord voldemort'))

console.log("------------------------------")





// Fizz and Buzz
console.log("!!! FIZZ BUZZ")

// multiple of 3, print "fizz"
// multiple of 5, print "buzz"
// multiple of 3 and 5, print "fizzbuzz"

function fizzbuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0)console.log("Fizz Buzz");
        else if(i % 5 === 0) console.log("Buzz");
        else if(i % 3 === 0) console.log("Fizz");
        else console.log(i);
        
    }
}

fizzbuzz(16)

console.log("------------------------------")





// TRUE COUNTER 
console.log("!!!True Counter")
 

/**
 * Create a function which returns the number of true values 
 * there are in an array.
 * 
 * Return 0 if given an empty array.
 * All array items are of the type boolean (true or false)
 */

function countTrue(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result.push(arr[i]);

        }
        
    }
    if(result.length < arr.length){
        return "False"
    }
    if(result.length = arr.length){
        return "True"
    }
   }

console.log(countTrue([true, true, true, true, true, true, true,])) // => true
console.log(countTrue([true, true, false, true])) // => false

console.log("------------------------------")




// PALIDOME 
console.log("!!!Palindrome")


function palindrome(str){
    const str2 = str.split("").reverse().join("");
    return str2 == str
}

console.log(palindrome("abba")) // => true
console.log(palindrome("abcdefg")) // => false
console.log(palindrome("racecar")) // => true

console.log("------------------------------")





// Capitalization 
console.log("!!!Capitalization")


/**
 * Write a function that accepts a string.  The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 */

 function capitalize(arr){
   var arr = arr.split(" ");
   for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }

    return arr.join(" ");    
}

console.log(capitalize('a short sentence')) // => 'A Short Sentence'
console.log(capitalize('i am lord voldemort')) // => 'I Am Lord Voldemort'

console.log("------------------------------")





// Sum Delta (Difference between 2 nummbers)
console.log("!!!Sum Delta")

/**
 * The difference between two elements in an array can mean a delta.
 * Find the sum of all deltas in an array.
 * 
 * Example [50,32] --> the difference between 50 and 32 is 18
 */

 function sumDelta(arr){
    var delta = [];
   if(arr.length > 1) {
   
        for(i = 0; i < arr.length-1; i++){
            delta[i]= arr[i]-arr[i+1]
            if(delta[i]< 0){
                delta[i] = - delta[i]
            }       
}
    let sum = 0
        for (let j = 0; j < delta.length; j++){
            sum = delta[j] + sum;
        }

        return sum

}   else
        return 0
}
console.log(sumDelta([])) // => 0
console.log(sumDelta([9])) // => 0
console.log (sumDelta([50, 32])) // => 18
console.log(sumDelta([32, 30, 15, 16, 18, 40, 35])); // => 47
    //       2 + 15 + 1 + 2 + 22 + 5

    console.log("------------------------------")

