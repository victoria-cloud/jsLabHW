/*TASK_1
Write a code which  can give grades to students according to theirs scores:*/

function giveGrade(num) {

let grades = ' ';
let score = +num;
   
    if(!isNaN(score)){
        switch (true){
            case score <= 49:
                grades = 'F'
            break;

            case score <= 59:
                grades = 'D'
            break;

            case score <= 69:
                grades = 'C'
            break;

            case score <= 89:
                grades = 'B'
            break;

            case score <= 100:
                grades = 'A'
            break;

            default:
            grades = 'Please enter your grade score';
        }
    }
    return grades;
}


/*TASK_2
Check if the season is Autumn, Winter, Spring or Summer.
If the user input is :

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

function checkSeason(month){
    let season;
    if(typeof(month) === 'string'){
        switch(true) {
            case ["december", "january", "february"].includes(month.toLowerCase()):
        season = 'the season is Winter';
            break;
        case ["september", "october", "november"].includes(month.toLowerCase()):
            season = 'the season is Autumn';
            break;
        case ["march", "may", "april"].includes(month.toLowerCase()):
            season = 'the season is Spring';
            break;
        case ["june", "july", "august"].includes(month.toLowerCase()):
            season = 'the season is Summer';
            break;
        default:
            season = "Enter month of seasons"
        }
    }
    return season;
}

/*TASK_3
Check if a day is weekend day or a working day. Your script will take day as an input.

  What is the day today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.*/



function getCurrentDay() {
    const currentDay = prompt('What day is today?').toLowerCase()
    const workDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].toString().toLowerCase();
            if (workDay.includes(currentDay)) {
                console.log(`${currentDay} is working day`)
            } else {
                console.log(`${currentDay} is a weeknd day`)
            }
}

getCurrentDay();

/* TASK_4 
Write a program which tells the number of days in a month.

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 days.

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */


function countDaysInMonth(year = 2021) {
    let month = prompt('Enter a month:')
    let monthInYear = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ];

    let months;
    let result;
    
    if (monthInYear.includes(month.toLowerCase())) {
        months = new Date(month+'-1-01').getMonth() + 1;
        result = new Date(year, months, 0).getDate();
        return `${month} has ${result} days`;
    } 
    
    else {
        return "Invalid value"
    }
}

