window.addEventListener('load', function () {
    var apiKey = "003a54ddfe39c875d00206109efba335"
    //set up the dom elements
    const searchButtonEl = document.getElementById("search-button")
    const searchValueEl = document.querySelector("#search-value")
    const historyEl = document.querySelector("#history")
    const todayEl = document.querySelector("#today")
    const forecastEl = document.querySelector("#forecast")

    searchButtonEl.addEventListener('click', function(){
        alert("searchButton clicked");
        storeCityHistory();
        diplayTodayWeather();
        diplay5DayForcast()
    })

    function storeCityHistory(){
        alert("storeCityHistory runs")
        diplayCityHistory()
    }

    function diplayCityHistory(){
        alert("diplayCityHistory runs")
    }

    function diplayTodayWeather(){
        alert("diplayTodayWeather runs")
    }

    function diplay5DayForcast(){
        alert("diplayTodayWeather runs")
    }


})
