const Weather = async () => {
  let mLocation;
  let mUserLocation;
  let mWeather;
  let mRequestSuccessful;
  let celcius = true;

  const updateWeatherAndLocation = async (location) => {
    try {
      const encodedLocation = encodeURIComponent(location);
      const weatherAt = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1b03c9929d6544bfa68193127232906&q=${encodedLocation}&days=7&is_day=1`
      );
      if (!weatherAt.ok) {
        throw new Error("API error");
      }
      mWeather = await weatherAt.json();
      mLocation = mWeather.location;
      mRequestSuccessful = true;
    } catch (error) {
      console.log(error);
      mRequestSuccessful = false;
    }
  };

  // Changes the current location with an input
  const changeLocation = async (location) => {
    // mLocation = location;
    await updateWeatherAndLocation(location);
  };

  // wraps geolocation.getCurrentPosition in a promise
  const getCurrentPosition = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

  const changeLocationToLocal = async () => {
    try {
      const position = await getCurrentPosition();
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      mUserLocation = `${latitude},${longitude}`;
      await updateWeatherAndLocation(mUserLocation);
    } catch (error) {
      console.log(error);
      const result = await navigator.permissions.query({ name: "geolocation" });
      if (result.state === "denied") {
        console.log(result.state);
        mRequestSuccessful = false;
      }
    }
  };

  const initiateWeather = async () => {
    try {
      await updateWeatherAndLocation("Haifa");
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = () => ({
    country: mLocation.country,
    city: mLocation.name,
  });

  const getForecast = () => {
    const arr = [];
    mWeather.forecast.forecastday.forEach((day) => {
      const maxTempValue = celcius
        ? Number.parseInt(day.day.maxtemp_c, 10)
        : Number.parseInt(day.day.maxtemp_f, 10);
      const minTempValue = celcius
        ? Number.parseInt(day.day.mintemp_c, 10)
        : Number.parseInt(day.day.mintemp_f, 10);
      arr.push({
        date: day.date.substring(5),
        maxTemp: maxTempValue,
        minTemp: minTempValue,
        condition: day.day.condition.text,
        conditionIcon: `https:${day.day.condition.icon}`,
      });
    });
    return arr;
  };

  const requestSucceeded = () => mRequestSuccessful;

  const changeUnits = () => {
    celcius = !celcius;
  };

  // 1b03c9929d6544bfa68193127232906
  await initiateWeather();
  return {
    getForecast,
    getLocation,
    changeLocation,
    changeLocationToLocal,
    requestSucceeded,
    changeUnits,
  };
};

export default Weather;
