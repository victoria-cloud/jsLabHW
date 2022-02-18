const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

/*Find a union b*/

const unionSet = new Set([...a, ...b]);
console.log([...unionSet]);

/*Find a intersection b*/
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const intersection = a.filter((item) => new Set(b).has(item));
console.log(intersection);


/*Find a with b*/ //??
const difference = a.filter((item) => !b.includes(item));
console.log(difference);

/*How many languages are there in the countries object file.*/

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
    }
]

const languages = new Set(countries.map(({ languages }) => languages).flat(Infinity)).size; //flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(languages);
