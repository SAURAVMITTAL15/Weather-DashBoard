const cityInput = document.querySelector('.city-input')
const searchButton = document.querySelector('.search-button')

const getCityCordinates = () => {
    const cityName = cityInput.value.trim()  // Get user entered city name and remove extra spaces
    if(!cityName){
        return // Return if cityName is empty
    }
    const fetchData = fetch(`http://api.weatherapi.com/v1/current.json?key=e21c60d9939f4136b32164327250505&q=${cityName}&aqi=yes`)
    .then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert(`An error ocurred while fetching the coordinates`)
    })
}

searchButton.addEventListener("click", getCityCordinates)