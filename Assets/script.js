// TODOS:
// =================================


// search function for current city weather
function search(city) {
     
    
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ae4ba04529c1b7a353e4492b8f77fbf4"
    
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
        
        function createDate() {
            for (let i = 1; i < 6; i++) {
                // Formatted date from data source
                var dt = object.daily[i].dt
                var day = new Date(dt*1000)
                day = day.toDateString()
                
                //    Creates divs containing the content of the five day forecast
                // =================================================================
                
                var fiveDayDiv = document.createElement("div")
                fiveDayDiv.classList.add("card", "shadow-lg", "text-dark", "mx-auto", "p-2", "bg-light")
                fiveDayDiv.style.maxWidth = "19%"
                
                //    Setting variables to the content of the JSON object from above
                var forecastTemp = object.daily[i].temp.max
                var forecastHumidity = object.daily[i].humidity
                var forecastWind = object.daily[i].wind_speed
                var iconSrc = object.daily[i].weather[0].icon
                console.log(day)
                console.log(forecastTemp)
                console.log(forecastHumidity)
                console.log(forecastWind)
                
                
                
                
                
               var dateEl = document.createElement("h4")
               dateEl.classList.add("card-title")  
               dateEl.textContent = day  
               
                        
               
               var tempEl = document.createElement("p")
               tempEl.classList.add("card-content")
               tempEl.innerHTML = "Temp: " + forecastTemp + " °F"

               
               var humEl = document.createElement("p")
               humEl.classList.add("card-content")
               humEl.innerHTML = "Humidity: " + forecastHumidity + "%"
               
               var windEl = document.createElement("p")
               windEl.classList.add("card-content")
               windEl.innerHTML = "Wind: " + forecastWind + " MPH"
               
               var icon = document.createElement("img")
               icon.src = "https://api.openweathermap.org/img/w/" + iconSrc +".png"
               icon.style.height = ("40px")
               icon.style.width = ("40px") 
               console.log(tempEl)

               
               
               // Append items
               fiveDayDiv.append(dateEl)
               fiveDayDiv.append(tempEl)
               fiveDayDiv.append(humEl)
               fiveDayDiv.append(windEl)
               fiveDayDiv.append(icon)
               document.getElementById("five-day").append(fiveDayDiv)
            }
                        
        }
        createDate()
    })
})
}
// search()

// Event handler for city search
// =================================
document.getElementById("select-city").onclick = function search(event) {
    
    // prevent default for the button
    // ====================
    event.preventDefault();
    
    // store the city name
    // ====================
    var searchEl = document.getElementById("city-input")

    // save search to local storage
    // ====================
    localStorage.setItem("city-input", JSON.stringify(searchEl.value))

   
} 

               


 
 

      
      
      

    






 
   
    


   

   

    

// Call stored items on page load
    // event deligation
