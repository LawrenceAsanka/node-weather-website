console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    messageOne.textContent = 'Loading.....';
    messageTwo.textContent = '';

    fetch('http://api.weatherstack.com/current?access_key=b7fc7bccf1ad00a1bff3640a026715f0&query='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error.info);
                messageOne.textContent = data.error.info;
            } else {

                messageOne.textContent = location;
                messageTwo.textContent =  data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature + ' degress out. There is a ' + data.current.precip + '% chance of rain.';
            }
        })
    })
})