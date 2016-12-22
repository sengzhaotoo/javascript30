const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
/* fetching data */ 
fetch(endpoint)
  .then(blob=>blob.json())
  .then(data=>cities.push(...data));

matches = (word, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

numComma = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
 
/* display matches */
function display(){
  const matchArr = matches(this.value, cities);
  const html = matchArr.map(place=>{
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.cities.replace(regex, `<span class="h1">${this.value}</span>`);
    const stateName = place.cities.replace(regex, `<span class="h1">${this.value}</span>`);
    return // returning a list of city name 
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numComma(place.population)}</span>
      </li>
  }).join('');
  suggestions.innerHTML = html; 
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', display);
searchInput.addEventListener('keyup', display);