const array = [1, 5, 23, 44, 14, 642, 4];
const array2 = array.sort((a, b) => a - b);
 console.log(array2);

function findMe(target, start, end) { 
    if(start > end){
        return"Not Found";
    }
    // If this happens we know the target is not in the array 
    
    const middle = Math.floor((start + end) / 2);

    if(array[middle] === target){
        return `Found it at index ${middle}`;
    }

        
    if(array[middle] > target){
        return findMe(target, start, middle-1);
    }

    if(array[middle] < target){
        return findMe(target, middle+1, end);
    }

}

console.log(findMe(44,0,array.length-1));