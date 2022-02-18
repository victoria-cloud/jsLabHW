/*TASK_1
Use substr to slice out the phrase because because because from the following 
sentence:'You cannot end a sentence with because because because is a conjunction'*/

const str = 'You cannot end a sentence with because because because is a conjunction';

let firstPart = str.substr(0,30);
let secPart = str.substr(54, 18);
console.log(firstPart + secPart);

/*TASK_2
'Love is the best thing in this world. Some found their love and some are still 
looking for their love.' Count the number of word love in this sentence.  
*/

let str2 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let matches = str2.match(/love/gmi).length;
console.log(matches)

/*TASK_3
Use match() to count the number of all because in the following sentence:*/

var str3 = 'You cannot end a sentence with because because because is a conjunction';

let matches2 = str3.match(/because/gm).length;  
console.log(matches2);

/*TASK_4 
Clean the following text and find the most frequent word 
(hint, use replace and regular expressions).*/

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanSentence = sentence.replace(/[%@&$;#!.,?]/gi, '').split(' ') 

function findMostFrequentWord(text) {

  let occurances = {};

  for (let word of text) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }
  
  let max = 0;
  let mostFrequentWord = '';

  for (let word of text) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostFrequentWord = word;
    }
  }

console.log("Most frequent word is " + mostFrequentWord + ' it repeats by ' + max + ' times') // I, repeats 3 times
  
}

findMostFrequentWord(cleanSentence)

/*TASK_5 
Calculate the total annual income of the person by extracting the numbers from the 
following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 
15000 euro online courses per month.*/

const textToExtract = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'

let extractedNumbers = textToExtract.match(/\d+/g).map(Number); //d+ match 1 or more numbers

function total(arr) {
  let totalIncome = 0;

  for (var i = 0; i < arr.length; i++) {
    totalIncome += arr[i] 
  }
  
  console.log(totalIncome)
}

total(extractedNumbers);