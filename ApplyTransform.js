/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i], i))
    }
    return result; 
}

let fn = function(n) {
    return n + 1;
}

let arr = [1, 2, 3]
const newArray = map(arr, fn);
console.log(newArray); 

// result: [2, 3, 4]