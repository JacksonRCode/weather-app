import cloudySun from "../images/weather-cloudy-sun.svg";

export default async function (key, days, location) {
  /*
    Gets weather data from [day1] - [day2]
    Day format = [yyyy-mm-dd]
  */
  let date1 = new Date();
  let date2 = new Date();
  date2.setDate(date1.getDate() + days);
  date1 = date1.toISOString().split("T")[0];
  date2 = date2.toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${key}`,
      {
        mode: "cors",
      }
    );

    const responseValue = await response.json();

    return responseValue.days;
  } catch (error) {
    alert("BAD REQUEST --> CHECK CITY NAME");
    return 0;
  }
}
