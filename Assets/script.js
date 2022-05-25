// TODOS:
// =================================


// search function for current city weather
function search(city) {
    var city= "chicago"
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
    var forecastURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
    var currentDate = moment().format("MMM Do, YYYY")

   fetch(searchURL)
    .then(response => response.json())
    .then(data => console.log(data))
    
    .then(function () {
        console.log(searchURL)    
    })
        
   
    // Clear the content of the div 
    document.getElementById("current").innerHTML = ""

    // Create HTML using the response information
    // console.log(data.main)
    
    // var cityEl = document.createElement("h2").textContent = response.name
    // var displayCurrentDate = cityEl + " " + currentDate
    // // var temp = document.createElement("p").textContent = "temperature: " + response.main.temp
    // // var humidity = document.createElement("p").textContent = "humidity: " + response.main.humidity
    // // var wind = document.createElement("p").textContent = "Wind Speed: " + response.wind.displayCurrentDate
    // // var currentWeather = response.weather[0].main


    // if else statements to set the icon based upon the current weather
        // rain

        // clouds

        // clear

        // drizzle

        // snow


   
    
}
search()


    // create HTML for city information

// Make call for UV

// Make call for 5 day forecast
    // store an array of responseults
    // create the div
    // store the responses date temp and humidity
    // create tags with the responseult item infromation
    // Append items

// Event handler for city search
    // prevent default for the button
    // store the city name
    // save search to local storage
    

// Call stored items on page load
    // event deligation
