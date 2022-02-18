/*TASK_1 
Calculate the total annual income of the person from the following text.*/

let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const result = str
  .match(/\d+/gi)
  .map((item) => Number(item))
  .reduce((acc, curr) => (acc += curr), 0);

  console.log(result)

/*TASK_2 Write a pattern which identify if a string is a valid JavaScript variable
isValidVariable('first_name'); // true
isValidVariable('first-name'); // false
isValidVariable('1first_name'); // false
isValidVariable('firstname'); // true*/

let var1 = 'first_name'
let var2 ='first-name'
let var3 = '1first_name'
let var4 = 'firstname'

function isValidVariable(variable) {
    let strPattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/ //^[a-zA-Z_$] for the 1 st char of var name, [a-zA-Z_$0-9]*$ - for other characters with count from 0 - 9 which can be repeated * times
    isValid = strPattern.test(variable)
    return isValid
} 

console.log(isValidVariable(var1))
console.log(isValidVariable(var2))
console.log(isValidVariable(var3))
console.log(isValidVariable(var4))


/*TASK_4 
Write a function which cleans text. After cleaning, count three most frequent words in the string.*/

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function frequencyOfWord(string, countToSlice) {
    let cleanString = string.replace(/[$@%&#;.!?,]/g, ''),
        words = cleanString.split(' '),
        frequencies = {},
        word, i;
  
    for(i = 0; i < words.length; i++ ) {
      word = words[i];
      frequencies[word] = frequencies[word] || 0;
      frequencies[word]++;
    }
    
    words = Object.keys(frequencies);
  
    return words.sort(function(a,b) { 
        return frequencies[b] - frequencies[a]}).slice(0, countToSlice).toString()
}

console.log('The most frequent words are: ' + frequencyOfWord(sentence, 3)) //get first 3 elements
    
frequencyOfWord(sentence)

function getMostFrequentWord(sent) {
    
    let cleanString = sent.replace(/[$@%&#;.!?,]/g, '')
    let words = cleanString.split(' ')
    let mostFreq = 1; 
    let counter = 0;
    let item;
    for (let i = 0; i < words.length; i++)
    {
            for (let j = i; j < words.length; j++)
            {
                    if (words[i] == words[j]) //if we have similar words 
                     counter++;
                    if (mostFreq < counter)
                    {
                      mostFreq = counter; 
                      item = words[i];
                    }
            }
            counter = 0;
    }
    console.log(`${item} repeats ${mostFreq} times `) ;
}

getMostFrequentWord(sentence)

