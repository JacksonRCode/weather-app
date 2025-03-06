import getData from "./weatherAPI";
import displayWeather from "./displayWeather";

export default async function initListeners(KEY) {
  document.querySelector(".search-img-button").addEventListener("click", () => {
    const city = document.querySelector(".search-bar").value;

    if (city === "") {
      console.log("Empty");
      return;
    }
    getData(KEY, 6, city).then((value) => {
      if (!value) {
        return;
      }
      displayWeather(value);
    });

    // displayWeather(week);
  });
}
