

const api = {
    key: '8f2100535c0e1250b2ddc4bc7fdc29c9',
    baseurl:'https://api.openweathermap.org/data/2.5/'
};
let query = 'Usa'
const request = new XMLHttpRequest();

request.open('GET',`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
request.responseType = 'json'

request.addEventListener('load', () => {
    if(request.status === 200){
        console.log(request.response);
    }
})
request.send()
// const searchBox = document.querySelector('.search-box');
// searchBox.addEventListener('keypress',setQuery);


// function setQuery(e){
//     if(e.keyCode === 13){
//         // console.log(searchBox.value);
//         getResualts(searchBox.value);
        
//     }
// }
// function getResualts(query){
    // fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    // APPID ni kichik harfada yozsak ham boladi
//     .then(
//         weather => {
//             return weather.json();
//         }
//     )
//     .then(displayResualts);

// }
// function displayResualts(weather){
//     console.log(weather);
//     let city = document.querySelector('.location .city')
//     city.innerHTML = `
//     ${weather.name}, ${weather.sys.country}
//     `
//   document.getElementById("weatherIconData").src = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
    

//     let now = new Date();
//     let date = document.querySelector('.date');
//     date.innerHTML = dateBuilder(now);

//     let temp = document.querySelector('.temp');

//     temp.innerHTML = `
//     ${Math.floor(weather.main.temp)}<span>°C</span>
//     `
//     let weatherEl = document.querySelector('.weather');

//     weatherEl.innerHTML = weather.weather[0].main

//     let hilow = document.querySelector('.hi-low');

//     hilow.innerHTML = `${Math.floor(weather.main.temp_min)}°C/${Math.floor(weather.main.temp_max)}°C`
// }

// function dateBuilder(s){
//     let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
//     let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

//     let day = days[s.getDay()]
//     let date = s.getDate()
//     let month = months[s.getMonth()];

//     let year = s.getFullYear();
//     return `${day} ${date} ${month} ${year}`

// }