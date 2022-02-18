/*Write a function name showDateTime which shows time in this format: 
08/01/2020 04:08 using the Date object.*/

function showDateTime() {
    let date = new Date()

    let day = function () {
        let currentDay = date.getDay()
        if(currentDay < 10) {
            return '0' + currentDay
        } else if (currentDay < 20){
            return '1' + currentDay
        } else if (currentDay < 30) {
            return '2' + currentDay
        } else if (currendDay >= 30 && currentDay <= 31) {
            return '3' + currentDay
        }
        };

    let month  = function () {
        let currentMonth = date.getMonth() + 1;
        if(currentMonth < 10) {
            return '0' + currentMonth
        } else if (currentMonth > 10 && currentMonth <= 12){
            return '1' + currentMonth
        } 
    };

    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let currentTime = (day() + '/' + month() +`/${year} ${hours}:${minutes}`)
    console.log(currentTime) 
}

showDateTime()

/*TASK_2
Declare a function name swapValues. This function swaps value of x to y (without using extra variables).

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4*/

function swapValues(x, y) {
    let swapedFirstValue = x;
    let swapedSecondValue = y;
    [swapedFirstValue, swapedSecondValue] = [swapedSecondValue, swapedFirstValue]
    console.log(`${swapedFirstValue} - it should be first value, ${swapedSecondValue} - it should be second`)
}

swapValues(1, 2) //2, 1


/*TASK_3 
Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']*/

const arrForReverse = [1, 2, 3, 4, 5]

function reverseArray(arr) {
    let revArr = [];
    for (let e = arr.length-1; e >=0; e--) {
        revArr.push(arr[e])
    }
    console.log(revArr)
}

reverseArray(arrForReverse)


/*TASK_4
Write a function which takes any number of arguments and return the sum of the arguments
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10*/

function argSum(){
    let sum = 0;
    for(let a = 0; a < arguments.length; a++){
        sum+= arguments[a]
    }
    console.log(sum)
}

argSum(1,2,3)//6


/*TASK_5
Call your function shuffleArray, it takes an array as a parameter and it returns a 
shuffled array*/

const arrForShuffle = [1, 2, 3, 4, 5]

function shuffleArr (array){
    let arr = array
    for (let i = arr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]]
    }
    console.log(arr)
}

shuffleArr(arrForShuffle)


/*TASK_6
Call your function factorial, it takes a whole number as a parameter and it return a 
factorial of the number*/

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
console.log(factorial(4)) //24. factorial of number is equal to multiplicated sum of each num before 4 = 1 * 2 * 3 * 4 


/*TASK_7 
Write a functions which checks if all items are unique in the array*/

const arr1 = [ 1, 2, 4, 4 ];
const arr2 = [ 1, 2, 3, 4 ];

function areElementsUnique(arr) {
    return new Set(arr).size === arr.length;
}

function uniqueHelper(arr) {
    if (areElementsUnique(arr)) {
    console.log("Elements are unique");
    } else {
    console.log("Elements not unique");
}}

uniqueHelper(arr1) //not unique
uniqueHelper(arr2) //unique



/* TASK_8
Write a function which checks if all the items of the array are the same data type */

function checkDataType(arr) {
  return new Set (arr.map(el => typeof el)).size <= 1; // return number of unique elements in arr, so if we check type - number of unique types 
}

console.log(checkDataType([1, 2, 3, 4])); //true
console.log(checkDataType(['2', 3, 4, true])); //false
