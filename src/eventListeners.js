import getData from "./weatherAPI";
import displayWeather from "./displayWeather";
let days = null;

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
      days = value;
      displayWeather(value, "C");
    });

    // displayWeather(week);
  });
  const tempBtn = document.querySelector(".unit-type");
  tempBtn.addEventListener("click", () => {
    if (tempBtn.classList.contains("c")) {
      if (days) {
        displayWeather(days, "F");
      }
      tempBtn.classList = "unit-type f";
    } else {
      if (days) {
        displayWeather(days, "C");
      }
      tempBtn.classList = "unit-type c";
    }
  });

  // document.querySelector(".time-boundary").addEventListener("click", () => {
  //   alert("Switch day / week");
  // });
}
