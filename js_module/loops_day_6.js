/*TASK_1

Using the countries array, create an array for countries length'.*/

const array = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

function arrayElementsLength(elements) {
    let newArr = [];
    for(const elem of elements) {
        newArr.push(elem.length)
    }
    console.log(newArr)
}

arrayElementsLength(array) //[ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5 ]


/*TASK_2
Using the countries array, find the country containing only 5 characters.*/

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

  function fiveElemsCountry(elements){
    let fiveElems = []
    for (let e = 0; e < elements.length; e++) {
          if (elements[e].length === 5) { 
              fiveElems.push(elements[e])
          }  
        }
       console.log(fiveElems)
    }

 fiveElemsCountry(countries)

/* TASK_3
 Find the longest word in the webTechs array*/
 
const webTechs = [
   'HTML',
   'CSS',
   'JavaScript',
   'React',
   'Redux',
   'Node',
   'MongoDB'
 ]

function longestWord(arr) {
    let lgth = 0;
    let longest;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }
    }

    console.log(longest);
}

longestWord(webTechs)


/*TASK_4
Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],
["Node", 4],["MongoDB", 7]]*/

const newWebTechsArr = [];

for (let i = 0; i < webTechs.length; i++) {
  const currentELement = webTechs[i];
  newWebTechsArr.push([currentELement, currentELement.length]);
}

console.log(newWebTechsArr)


/*TASK_5 
This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
reverse the order using loop without using a reverse method.*/

const fruitArr = ['banana', 'orange', 'mango', 'lemon'] 

function reverseArr(arr) {
    
    const reversedFruitArr = [];
    for(let f = arr.length - 1; f >= 0; f--) {
        reversedFruitArr.push(arr[f])
    }   
    console.log(reversedFruitArr)
}

reverseArr(fruitArr)


/*TASK_6 
Copy countries array (avoid mutation)*/

function newArrFromOld(arr) {
    const newArrayFromOld = []
    for (let e = 0; e < arr.length; e++) {
        newArrayFromOld.push(arr[e])
    }
    console.log(newArrayFromOld + ' - NEW ARRAY VIA "FOR" CYCLE')
}

newArrFromOld(countries)

//or

const copiedCountries = [...countries]
console.log(copiedCountries)

/*TASK_7
Sort the webTechs array*/

function sortTechArr(arr) {

    let pushedForSort = []
        for(let i = 0; i < arr.length; i++) {
         for(let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        pushedForSort.push(arr[i])
    }
    return pushedForSort 
}

console.log(sortTechArr(webTechs));

//or

const sortWebTech = [...webTechs]
const sorted = sortWebTech.sort()
console.log(sorted) //sorted by alphabet

/* TASK_8
Find the country containing the hightest number of characters in the countries array*/

const countries2 = [
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
  
function longestCountryName(arr) {
 
    let country = '';
    for (let i = 0; i < arr.length; i++) {
      if (country.length < arr[i].length) {
        country = arr[i];
      };
    };
    return country;
};

console.log(longestCountryName(countries2)) //Central African Republic


/*
Extract all the countries contain the word 'land' from the countries array and 
print it as array*/

const countriesCopy = [...countries2]

function findWord(arr) {
    const incl = []

    for(let i = 0; i < arr.length; i++) {
        incl.push(arr[i].split(' ').join(', '));
    }
    for(let e = 0; e < incl.length; e++) {
        if(incl[e].includes('land')) {
          console.log(incl[e])
        }
    }
}
    
findWord(countries2)


function findLandWords(str) {
    const regex = /\w*land\w*/gm
    return str.match(regex)
}

console.log(findLandWords(countriesCopy))

/*Reverse the countries array and capitalize each country and stored it as an array*/

function reverseCountries(arr) {
  const revCountriesArr = []
  for (let e = arr.length - 1; e >= 0; e--) {
      revCountriesArr.push([arr[e]])
  }
  console.log(revCountriesArr)
}

console.log(reverseCountries(countries2));

/*Extract all the countries containing two or more words from the countries array and print it as array*/

function getDoubledName(arr) {
   
    const moreThanOne = []
  
    for (let i = 0; i < arr.length; i++) {
        moreThanOne.push(arr[i].toString().split(' '))
    }
    
    for (let e = 0; e < moreThanOne.length; e++) {
        if (moreThanOne[e].length > 2) {
            console.log(moreThanOne[e])
        } 
    }
};
  
getDoubledName(countries2);