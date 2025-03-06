const getData = async (key, days) => {
  /*
    Gets weather data from [day1] - [day2]
    Day format = [yyyy-mm-dd]
  */
  let date1 = new Date();
  let date2 = new Date();
  date2.setDate(date1.getDate() + days);
  date1 = date1.toISOString().split("T")[0];
  date2 = date2.toISOString().split("T")[0];

  console.log(date1);
  console.log(date2);
  const location = "london";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${key}`,
    {
      mode: "cors",
    }
  );
  const responseValue = await response.json();
  console.log(responseValue);
  responseValue.days.forEach((day) => {
    console.log(day.feelslike);
  });
};

getData("9GPBQK2CV486M6C8HHFL83FLC", 6);
