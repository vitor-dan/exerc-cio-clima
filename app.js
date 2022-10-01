const weatherToken = '21244bb487b7344335670d92936ab039'
const lat = '-24.22663421276751'
const lon = '-46.87194771364657'

var button = document.querySelector('#app button')
var mainDiv = document.querySelector('#app main')

button.addEventListener('click', getWeather)

function getWeather() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherToken}&lang=pt_br`)
    .then(function (response) {
        console.log(response)
        addLine(response.data.name)
        addLine(response.data.weather[0].description)
    }).catch(function (error) {
        console.log(error)
    })
}

function addLine(text) { 
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    mainDiv.appendChild(line)
}