/*TASK_1
First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)*/


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const cancelPunctuation = text.replace(/[.,]/g,"").split(' ');
console.log(cancelPunctuation)
console.log(cancelPunctuation.length)

/*TASK_2
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
If it does not exist add to the countries list and print the array.*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
if (countries.includes('Ethiopia')) {
    console.log("ETHIOPIA")
}



/*TASK_3
In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.*/

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

if (webTechs.includes('Sass')) {
    console.log("Saas is a CSS preprocess")
} else {
webTechs.push('Sass');
console.log(webTechs);
}

/*TASK_4
Concatenate the following two variables and store it in a fullStack variable.
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/*TASK_5 
The following is an array of 10 students ages:
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const maxValue = Math.max(...ages)
const minValue = Math.min(...ages)
console.log(`${maxValue} - max value, ${minValue} - min value`)

function avgAge(array) { 
    let sum = 0; 
    for (let i = 0; i < array.length; i++) { 
        sum += array[i]; 
    } 
    console.log(sum);
    let arrLength = array.length
    let divededAvg = Math.round(sum / arrLength)
    console.log(`Divided avg is + ${divededAvg}`)
}

avgAge(ages) //23

function agesRange(max, min) {
    console.log(max - min + ' - is a range between max and min ages');
}

agesRange(maxValue, minValue);

function compareAbsAvg(max, min) {
    let avgAgesResult = 23
    let maxAbs = max - avgAgesResult;
    let minAbs = min - avgAgesResult;
    let comparedAbs = Math.abs(maxAbs/minAbs)
    console.log(`${comparedAbs} is compared Abs`) //0.75 is compared abs
}

compareAbsAvg(26, 19); //maxvalue and min

function medianValue(arr){
    arr.sort(function(a, b){ return a - b; });
    let i = arr.length / 2;
    return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
  }

console.log(medianValue(ages)) //24