import fetch from "node-fetch"

/*Read the countries API using fetch and print the name of country, capital, languages, population and area*/
//to use fetch we need set "type":"module" in package.json and install node-fetch via npm 

const url = 'https://restcountries.eu/rest/v2/all'

async function getData(adress) {
  
    const response = await fetch(adress);
    const res = await response.json();
  
    res.forEach(({ name, capital, population, area, languages }) =>
    console.log(
      '\n Name: ' +
      name +
      '\n Capital: ' +
      capital +
      '\n Population: ' +
      population +
      '\n Area: ' +
      area +
      '\n Languages: ' +
      languages.map(({name}) => name).join(', '),
    ),
  );
};
  
getData(url)

/*Print out all the cat names in to catNames variable*/

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function getCatNames(page) {
  
  const response = await fetch(page);
  const res = await response.json();

  res.forEach(({ name }) => console.log(name))
 
}

getCatNames(catsAPI)

/*Read the countries api and find out the 10 largest countries*/

async function findTenLargest(adress) {
  
    const response = await fetch(adress);
    const res = await response.json();
  
    const arrForSort = []
    res.forEach(({ name, area }) => arrForSort.push({name, area}));
    const sorted = arrForSort.sort((a, b) => ( b.area > a.area ) ? 1 : -1).slice(0, 10)
    console.log(sorted)
}
  
findTenLargest(url)


/*Read the countries api and count total number of languages in the world used as officials*/


async function getCountOfLangs(adress) {
    
    const response = await fetch(adress);
    const res = await response.json();
    const languages = res.map(({ languages }) => languages.map(({ name }) => name)).flat(Infinity);
    console.log([...new Set(languages)].length);     
}

getCountOfLangs(url) //112