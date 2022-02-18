/*Iterate through the users array and get all the keys of the object using destructuring*/
const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://restcountries.eu/data/ago.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://restcountries.eu/data/aia.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antarctica',
      capital: '',
      languages: ['English', 'Russian'],
      population: 1000,
      flag: 'https://restcountries.eu/data/ata.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://restcountries.eu/data/atg.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://restcountries.eu/data/arg.svg',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://restcountries.eu/data/arm.svg',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://restcountries.eu/data/abw.svg',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://restcountries.eu/data/aus.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://restcountries.eu/data/aut.svg',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://restcountries.eu/data/aze.svg',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://restcountries.eu/data/bhs.svg',
      currency: 'Bahamian dollar'
    }
]

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}
  
/*Find the persons who have less than two skills*/

let checkSkills = users.filter(user => user.skills.length < 2)[0].name
console.log(checkSkills)

/*Destructure the countries object print name, capital, population and languages of all countries*/

for (const {name, capital, population, languages} of countries){
    console.log(name, capital, population, languages)
}

/*Write a function called convertArrayToObject which can convert the array to a structure object.*/

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(arr) {
    const converted = arr.map(s => Object.assign({}, s));
    console.log(converted)  
}

convertArrayToObject(students);

/*Copy the student object to newStudent without mutating the original object. In the new object add the following:
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets*/

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {...student};
  
const taskone = newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
const tasktwo = newStudent.skills.backEnd.push({skill: 'Express', level: 9})
const taskthree = newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
const taskfour = newStudent.skills.dataScience.push('SQL')
console.log(newStudent.skills)
