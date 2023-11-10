let form = document.querySelector('#location-form')
form.addEventListener('submit', getWeather);
/* selecting field */
const inputsearch = document.querySelector('#location-input');
const Searchcity = document.querySelector('.city');
const temprature = document.querySelector('.temprature');
const main = document.querySelector('.main');
const describe = document.querySelector('.description');
let weatherContainer = document.getElementById('weather-container');
let mistake = document.querySelector('.mistake')
 
/* selecting ends here */

/* main function starts here */
async function getWeather(e) {
  e.preventDefault();
  const city = inputsearch.value;


  if (inputsearch.value === '') {
    alert('please enter a city');
  }


  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3db5263a539bba3517eafe0b14b622b9`)
    const data = await response.json();
    const temperature = Math.ceil(data.main.temp - 273) + '&deg' + 'c';
    temprature.innerHTML = temperature;
    Searchcity.innerHTML = data.name;
    main.innerHTML = data.weather[0].main;
    describe.innerHTML = data.weather[0].description;
    mistake.innerHTML = '';
    inputsearch.value = '';
    weatherContainer.classList.remove('active');
  }

  catch (error) {
    mistake.innerHTML = 'city not found';
    temprature.innerHTML = '';
    Searchcity.innerHTML = '';
    main.innerHTML = '';
    describe.innerHTML = '';
    weatherContainer.classList.add('active');
    inputsearch.value = '';
  }

}


