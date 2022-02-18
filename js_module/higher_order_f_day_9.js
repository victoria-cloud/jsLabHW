const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

/*TASK_1 Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback)) */

let totalPrice = products
    .filter(product => product.price != 0)
    .reduce((acc, p) => acc + p.price, 0)
console.log(totalPrice) 

 //or

function retPrice(prods) {
return prods
    .filter(product => product.price != 0)
    .reduce((accumulator, product) => accumulator + product.price, 0)
}
console.log(retPrice(products))

/*TASK_2 Find the sum of price of products using only reduce reduce(callback))*/

const newArr = []
let arrForReduce = products.forEach(prod => newArr.push(Number(prod.price))) //delete blanks and replace on 0
console.log(newArr)
 
const reducer = (prev, curr) => prev + curr;
console.log(newArr.reduce(reducer));
 
 /*TASK_3 Declare a getFirstTenCountries function and return an array of ten countries. 
 Use different functional programming to work on the countries.js array*/
 
function getFirstTenCountries1(countr) {
    let firstTen = countr.slice(0, 10)
    console.log(firstTen)
}

//or

function getFirstTenCountries2(countrs) {
    let firstTen2 = countrs.filter((countr, idx) => countr && idx < 10)
    console.log(firstTen2);
}

getFirstTenCountries1(countries)
getFirstTenCountries2(countries)

 
 /*TASK_4 Declare a getLastTenCountries function which returns the last ten countries in the countries array*/

function getLastTenCountries(countr) {
    let lastTen = countr.slice(-10)
    return lastTen
}

console.log(getLastTenCountries(countries))

/*TASK_5  Use the countries information, in the data folder. Sort countries by name, by capital, by population*/

const countries2 = [
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
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://restcountries.eu/data/bhr.svg',
    currency: 'Bahraini dinar'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://restcountries.eu/data/bgd.svg',
    currency: 'Bangladeshi taka'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://restcountries.eu/data/brb.svg',
    currency: 'Barbadian dollar'
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    languages: ['Belarusian', 'Russian'],
    population: 9498700,
    flag: 'https://restcountries.eu/data/blr.svg',
    currency: 'New Belarusian ruble'
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11319511,
    flag: 'https://restcountries.eu/data/bel.svg',
    currency: 'Euro'
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    languages: ['English', 'Spanish'],
    population: 370300,
    flag: 'https://restcountries.eu/data/blz.svg',
    currency: 'Belize dollar'
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    languages: ['French'],
    population: 10653654,
    flag: 'https://restcountries.eu/data/ben.svg',
    currency: 'West African CFA franc'
  },
  {
      name: 'Mauritius',
      capital: 'Port Louis',
      languages: ['English'],
      population: 1262879,
      flag: 'https://restcountries.eu/data/mus.svg',
      currency: 'Mauritian rupee'
    },
    {
      name: 'Mayotte',
      capital: 'Mamoudzou',
      languages: ['French'],
      population: 226915,
      flag: 'https://restcountries.eu/data/myt.svg',
      currency: 'Euro'
    },
    {
      name: 'Timor-Leste',
      capital: 'Dili',
      languages: ['Portuguese'],
      population: 1167242,
      flag: 'https://restcountries.eu/data/tls.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Togo',
      capital: 'Lomé',
      languages: ['French'],
      population: 7143000,
      flag: 'https://restcountries.eu/data/tgo.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Tokelau',
      capital: 'Fakaofo',
      languages: ['English'],
      population: 1411,
      flag: 'https://restcountries.eu/data/tkl.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Tonga',
      capital: "Nuku'alofa",
      languages: ['English', 'Tonga (Tonga Islands)'],
      population: 103252,
      flag: 'https://restcountries.eu/data/ton.svg',
      currency: 'Tongan paʻanga'
    },
    {
      name: 'Trinidad and Tobago',
      capital: 'Port of Spain',
      languages: ['English'],
      population: 1349667,
      flag: 'https://restcountries.eu/data/tto.svg',
      currency: 'Trinidad and Tobago dollar'
    },
    {
      name: 'Tunisia',
      capital: 'Tunis',
      languages: ['Arabic'],
      population: 11154400,
      flag: 'https://restcountries.eu/data/tun.svg',
      currency: 'Tunisian dinar'
    }
]

function sortedByPopulation(countrs) {
    const byPopulation = countrs.slice(0)
    byPopulation.sort(function(a, b) {
        return a.population - b.population
    })
console.log(byPopulation)
};

sortedByPopulation(countries2);


function sortedByName(countrs) {
    const byName = countrs.slice(0)
    let sorted = byName.sort()
  console.log(sorted);
};

sortedByName(countries2)


function sortedByCapital(countrs) {
    const byCapital = countrs.slice(0)
    byCapital.sort(function(a, b) {
        let x = a.capital.toLowerCase()
        let y = b.capital.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
    });
console.log(byCapital)
};

sortedByCapital(countries2)

/*TASK_6 Find the 10 most spoken languages:*/

function getTenMostSpokenLangs(countrs) {
  const newArr = []
  const counts = {}
  const langs = Object.keys(countrs).forEach(c => newArr.push(countrs[c].languages))
  for (const num of newArr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
 console.log(counts)
}

getTenMostSpokenLangs(countries2)

/*TASK_7 
Use countries_data.js file create a function which create the ten most 
populated countries*/

function getTenMostPopulated(countrs, indx) {
  let topOfPopul = [...countrs].sort((a, b) => b.population - a.population).slice(0, indx)
  let top = topOfPopul.forEach(({ name, population }) => {
    console.log(`country: ${name}, population: ${population}`)
  })
  console.log(top)
}

getTenMostPopulated(countries2, 10)
