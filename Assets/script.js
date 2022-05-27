// TODOS:
// =================================


// search function for current city weather
function search(city) {
    var city= "Chicago"
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
    var forecastURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
    var currentDate = moment().format("MMM Do, YYYY")
    
    fetch(searchURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        // console.log(object)
        
        
        
        
        
        
        // Clear the content of the div 
        document.getElementById("current").innerHTML = ""
        
        // Create HTML using the response information
        
        
        var cityEl = document.createElement("h2").textContent = object.name
        var icon = object.weather[0].icon    
        var displayCurrentDate = cityEl + ", " + currentDate
        var temp = document.createElement("p").textContent = "Temperature: " + object.main.temp
        var humidity = document.createElement("p").textContent = "Humidity: " + object.main.humidity
        var wind = document.createElement("p").textContent = "Wind Speed: " + object.wind.speed
       
        
        
        document.getElementById("current").innerHTML = displayCurrentDate 
        document.getElementById("temp").innerHTML = temp + " °F"
        document.getElementById("humidity").innerHTML = humidity + "%"
        document.getElementById("wind").innerHTML =  wind + " MPH"
        document.getElementById("img").src = "https://api.openweathermap.org/img/w/" + icon +".png"
    
    // Make call for UV index. Used latitude and longitude out of the object for current conditions by city
    // =================================================================

    var latitude = object.coord.lat
    var longitude = object.coord.lon
    var UVURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ latitude + "&lon=" + longitude + "&units=imperial&exclude={part}&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
       
    
    fetch(UVURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
        var uvi = object.current.uvi
        document.getElementById("UVI").innerHTML = "UV Index: " + uvi
        

        // Else if statements to change color of the background of the UV div
    
        if(uvi <= 2) {
            document.getElementById("UVI").style.background = "green"
        } else if (uvi >= 3 && uvi <= 5) {
            document.getElementById("UVI").style.background = "yellow"
        } else if (uvi >= 6 && uvi <= 7 ) {
            document.getElementById("UVI").style.background = "orange"
        }else {
            document.getElementById("UVI").style.background = "red"
        }

    //    Used same URL to get forecast infromation
    // =================================================================

        function createDate(dt) {
           for (let i = 1; i < 6; i++) {
            // Formatted date from data source
               var dt = object.daily[i].dt
               var day = new Date(dt*1000)
               day = day.toDateString()
               var forecastTemp = object.daily[i].temp.max
               var forecastHumidity = object.daily[i].humidity
               var forecastWind = object.daily[i].wind_speed
               var icon = object.daily[i].weather[0].icon
               console.log(day)
               console.log(forecastTemp)
               console.log(forecastHumidity)
               console.log(forecastWind)
               var dateEl = document.createElement("h4").innerHTML = day
               var tempEl = document.createElement("p").innerHTML = forecastTemp
               var humEl = document.createElement("p").innerHTML = forecastHumidity
               var windEl = document.createElement("p").innerHTML = forecastWind
               var icon = document.createElement("img").src = "https://api.openweathermap.org/img/w/" + icon +".png"

               var fivedaydiv = document.getElementById("five-day")
               fivedaydiv.append(dateEl)
               fivedaydiv.append(icon)
               fivedaydiv.append(tempEl)
               fivedaydiv.append(humEl)
               fivedaydiv.append(windEl)
            }
            
        }
        createDate()
    })
                


               


    // Make call for 5 day forecast
 

      
      
      

    





})

 
   
    
}
search()


   

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
