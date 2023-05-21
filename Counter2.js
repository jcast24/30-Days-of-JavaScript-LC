/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//     let count = init;

//     return {
//         increment: function() {
//             return ++count; 
//         },
//         decrement: function() {
//             return --count; 
//         }, 
//         reset: function(){
//             count = init; 
//             return count; 
//         }
//     }
// };
var createCounter = function(init) {
    let count = init; 

    function increment() {
        return ++count; 
    }

    function decrement() {
        return --count; 
    }

    function reset() {
        count = init; 
        return count; 
    }

    return {
        increment: increment,
        decrement: decrement, 
        reset: reset
    }
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4