import cloudySun from "../images/weather-cloudy-sun.svg";

export default function displayWeather(week, temp) {
  // feelslike gets the weather
  // datetime gets date
  // conditions gets conditions
  // description gets weather description
  // hours gets hourly
  const template = document.getElementById("data-card-template");
  const displayBody = document.querySelector(".display");
  // Clear display
  [...displayBody.children].forEach((child) => {
    displayBody.removeChild(child);
  });

  week.forEach((day) => {
    // For loop iterating through each day
    // Use this functionality to insert data
    // Probably import card creation file to do so

    const tempClone = template.content.cloneNode(true);
    tempClone.querySelector(".data-card-date").textContent = day.datetime;
    let todayFeelsLike = day.feelslike;
    if (temp === "C") {
      todayFeelsLike = ((todayFeelsLike - 32) * (5 / 9)).toFixed(1) + " °C";
    } else {
      todayFeelsLike = todayFeelsLike + " °F";
    }
    tempClone.querySelector(".data-card-weather").textContent = todayFeelsLike;
    //
    tempClone.querySelector(".data-card-icon").src = cloudySun;

    displayBody.appendChild(tempClone);
  });
}
