const apiKey = "";
const apiURL = "";
//   use your apikey and apiURL from https://home.openweathermap.org/

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (!response.ok) {
    document.querySelector(".err-message").style.display = "block";
    document.querySelector(".weather").style.display = "none";

    return;
  } else {
    var data = await response.json();
    console.log(data, "data");

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";

    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
