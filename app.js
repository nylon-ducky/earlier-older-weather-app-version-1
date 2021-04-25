document.addEventListener("DOMContentLoaded", () => {
  let lat;
  let long;
  let currentDescription = document.querySelector("#current-description");
  let currentTemp = document.querySelector("#current-temp");
  let feelsLike = document.querySelector("#feels-like");
  let timeZone = document.querySelector("#timezone");
  let tomTemp = document.querySelector("#tom-temp");
  let tomDescription = document.querySelector("#tom-description");
  let day1 = document.querySelector("#day1");
  let day2 = document.querySelector("#day2");
  let day3 = document.querySelector("#day3");
  let day4 = document.querySelector("#day4");
  let day5 = document.querySelector("#day5");
  let day6 = document.querySelector("#day6");
  let day7 = document.querySelector("#day7");
  let day1t = document.querySelector("#day1t");
  let day2t = document.querySelector("#day2t");
  let day3t = document.querySelector("#day3t");
  let day4t = document.querySelector("#day4t");
  let day5t = document.querySelector("#day5t");
  let day6t = document.querySelector("#day6t");
  let day7t = document.querySelector("#day7t");
  let day1d = document.querySelector("#day1d");
  let day2d = document.querySelector("#day2d");
  let day3d = document.querySelector("#day3d");
  let day4d = document.querySelector("#day4d");
  let day5d = document.querySelector("#day5d");
  let day6d = document.querySelector("#day6d");
  let day7d = document.querySelector("#day7d");
  let day1img = document.querySelector("#day1img");
  let day2img = document.querySelector("#day2img");
  let day3img = document.querySelector("#day3img");
  let day4img = document.querySelector("#day4img");
  let day5img = document.querySelector("#day5img");
  let day6img = document.querySelector("#day6img");
  let day7img = document.querySelector("#day7img");

  function whatDay() {}

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      let units = "imperial";
      console.log(position);

      const key = "4a2cbd92319bbd0aa9d9a86480652394";
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}&units=${units}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          {
            console.log(data);
            const { icon } = data.current.weather[0];
            let img = document.querySelector("#img");
            img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const { description } = data.current.weather[0];
            const { temp, feels_like } = data.current;
            const { timezone } = data;
            currentDescription.textContent = description;
            currentTemp.textContent = temp + " °F";
            feelsLike.textContent = "Feels like: " + feels_like + " °F";
            timeZone.textContent = "Timezone: " + timezone;
          }

          {
            const { icon } = data.current.weather[0];
            let img0 = document.querySelector("#img0");
            img0.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const { description } = data.daily[0].weather[0];
            tomDescription.textContent = "Tomorrow's weather: " + description;
            const { max } = data.daily[0].temp;
            tomTemp.textContent = "With a high of: " + max + " °F";
          }

          {
            const { max } = data.daily[1].temp;
            const { main } = data.daily[1].weather[0];
            const { icon } = data.daily[1].weather[0];

            day1d.textContent = main;
            day1t.textContent = max + " °F";
            day1img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            let dayOfWeek1 = document.querySelector("#dayOfWeek1");
            dayOfWeek1.textContent = whatDay(3);
          }

          {
            const { max } = data.daily[2].temp;
            const { main } = data.daily[2].weather[0];
            const { icon } = data.daily[2].weather[0];
            day2d.textContent = main;
            day2t.textContent = max + " °F";
            day2img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            let dayOfWeek2 = document.querySelector("#dayOfWeek2");
            dayOfWeek2.textContent = whatDay(4);
          }

          {
            const { max } = data.daily[3].temp;
            const { main } = data.daily[3].weather[0];
            const { icon } = data.daily[3].weather[0];
            day3d.textContent = main;
            day3t.textContent = max + " °F";
            day3img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          }

          {
            const { max } = data.daily[4].temp;
            const { main } = data.daily[4].weather[0];
            const { icon } = data.daily[4].weather[0];
            day4d.textContent = main;
            day4t.textContent = max + " °F";
            day4img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          }

          {
            const { max } = data.daily[5].temp;
            const { main } = data.daily[5].weather[0];
            const { icon } = data.daily[5].weather[0];
            day5d.textContent = main;
            day5t.textContent = max + " °F";
            day5img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          }

          {
            const { max } = data.daily[6].temp;
            const { main } = data.daily[6].weather[0];
            const { icon } = data.daily[6].weather[0];
            day6d.textContent = main;
            day6t.textContent = max + " °F";
            day6img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          }

          {
            const { max } = data.daily[7].temp;
            const { main } = data.daily[7].weather[0];
            const { icon } = data.daily[7].weather[0];
            day7d.textContent = main;
            day7t.textContent = max + " °F";
            day7img.src =
              "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          }
        });
    });
  }
});
