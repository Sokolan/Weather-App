import gitImg from "./img/github.png";
import currentLocationImg from "./img/map.png";
import searchImg from "./img/search.png";
import "./style/footer.css";
import "./style/header.css";
import "./style/mainDisplay.css";

// Defines
const forecastDays = 7;
let mWeather;

const createElement = (element, className = "", attributes = []) => {
  const newElement = document.createElement(element);
  if (className !== "") {
    newElement.classList.add(className);
  }
  attributes.forEach((attribute) => {
    newElement.setAttribute(attribute[0], attribute[1]);
  });
  return newElement;
};

const createImgElement = (imgSource, className) => {
  const img = new Image();
  img.src = imgSource;
  img.classList.add(className);
  return img;
};

const updateWeatherAndLocation = () => {
  const updateLocation = () => {
    const locationContainer = document.querySelector(
      ".current-location-container"
    );
    const location = mWeather.getLocation();
    locationContainer.textContent = `${location.city}, ${location.country}`;
  };
  const updateWeather = () => {
    const forecast = mWeather.getForecast();
    const daysForcast = document.querySelectorAll(".day-forecast-container");
    daysForcast.forEach((day) => {
      const date = day.querySelector(".date");
      if (day.id === "0") {
        date.textContent = "Today";
      } else if (day.id === "1") {
        date.textContent = "Tomorrow";
      } else {
        date.textContent = forecast[day.id].date;
      }
      day.querySelector(".min-max-tmp").textContent = `${
        forecast[day.id].maxTemp
      }° - ${forecast[day.id].minTemp}°`;
      day.querySelector(".weather-condition").textContent = `${
        forecast[day.id].condition
      }`;
      day
        .querySelector(".weather-img-container")
        .replaceChildren(
          createImgElement(
            forecast[day.id].conditionIcon,
            "weather-condition-icon"
          )
        );
    });
  };
  updateLocation();
  updateWeather();
};

// Header contains the app name, change location to local and search for location
const createHeader = () => {
  const createLogo = () => {
    const logo = createElement("div", "logo");
    logo.textContent = "Weather";

    return logo;
  };
  const createLocationContainer = () => {
    const createUserLocationButton = () => {
      const userLocation = createElement("button");
      userLocation.appendChild(
        createImgElement(currentLocationImg, "current-location")
      );
      userLocation.addEventListener("click", async () => {
        await mWeather.changeLocationToLocal();
        updateWeatherAndLocation();
        if (!mWeather.requestSucceeded()) {
          alert("Check location permissions");
        }
      });

      return userLocation;
    };

    const createSearchLocation = () => {
      const searchLocation = async () => {
          const input = document.querySelector(".search-bar");
          await mWeather.changeLocation(input.value);
          if (!mWeather.requestSucceeded()) {
            document.querySelector(".search-bar").classList.add("invalid-location");
          }
          updateWeatherAndLocation(input.value);
      }
      const createSearchBar = () => {
        const searchBar = createElement("input", "search-bar", [
          ["type", "text"],
          ["placeholder", "enter location"]
        ]);

        searchBar.addEventListener("click", (e) => {
          if (e.target.classList.remove('invalid-location'));
        });
        searchBar.addEventListener("keydown", (e) => {
          if (e.code === "Enter") {
            searchLocation();
          }
          e.target.classList.remove("invalid-location");
        });

        return searchBar;
      };
      const createSubmitButton = () => {
        const submitButton = createElement("button", "submit-location-search");
        submitButton.appendChild(createImgElement(searchImg, "search-button"));
        submitButton.addEventListener("click", searchLocation);

        return submitButton;
      };
      const searchLocationContainer = createElement(
        "div",
        "search-location-container"
      );
      searchLocationContainer.appendChild(createSearchBar());
      searchLocationContainer.appendChild(createSubmitButton());

      return searchLocationContainer;
    };
    const locationContainer = createElement("div", "location-container");

    locationContainer.appendChild(createUserLocationButton());
    locationContainer.appendChild(createSearchLocation());
    return locationContainer;
  };
  const header = createElement("div", "header");

  header.appendChild(createLogo());
  header.appendChild(createLocationContainer());
  return header;
};

const createMainDisplay = () => {
  const createDisplayContainer = () => {
    const createCurrentLocationContainer = () => {
      const currentLocationContainer = createElement(
        "div",
        "current-location-container"
      );
      currentLocationContainer.innerText = "LOCATION TEST";

      return currentLocationContainer;
    };

    const createUnitsChangerButton = () => {
      const unitsButton = createElement("button", "change-units");
      unitsButton.textContent = "Celcius"

      unitsButton.addEventListener("click", (e) => {
        if (e.target.textContent === "Celcius") {
          e.target.textContent = "Fahrenheit"
        }
        else {
          e.target.textContent = "Celcius";
        }
        mWeather.changeUnits();
        updateWeatherAndLocation();
      })
      return unitsButton;
    }

    const createForecastContainer = () => {
      const forecastContainer = createElement("div", "forecast-container");
      for (let i = 0; i < forecastDays; i += 1) {
        const dayForecastContainer = createElement(
          "div",
          "day-forecast-container",
          [["id", `${i}`]]
        );
        dayForecastContainer.appendChild(createElement("p", "min-max-tmp"));
        dayForecastContainer.appendChild(
          createElement("p", "weather-condition")
        );
        dayForecastContainer.appendChild(
          createElement("div", "weather-img-container")
        );
        dayForecastContainer.appendChild(createElement("p", "date"));

        forecastContainer.appendChild(dayForecastContainer);
      }

      return forecastContainer;
    };
    const displayContainer = createElement("div", "display-container");

    displayContainer.appendChild(createCurrentLocationContainer());
    displayContainer.appendChild(createUnitsChangerButton());
    displayContainer.appendChild(createForecastContainer());
    return displayContainer;
  };
  const mainDisplay = createElement("div", "main-display");

  mainDisplay.appendChild(createDisplayContainer());
  return mainDisplay;
};

// Footer of display screen
const createFooter = () => {
  // Create git link with git icon
  const createGitLinkImg = () => {
    const gitLink = createElement("a", "git-link", [
      ["href", "https://github.com/Sokolan/ToDo-List"],
      ["target", "_blank"],
    ]);
    const gitIcon = createImgElement(gitImg, "git-img");
    gitIcon.classList.add("git-img");
    gitLink.appendChild(gitIcon);
    return gitLink;
  };

  const createCreatorName = (creatorName) => {
    const creator = createElement("p", "creator");
    creator.textContent = creatorName;
    return creator;
  };

  const footerContainer = createElement("div", "footer");

  footerContainer.appendChild(createGitLinkImg());
  footerContainer.appendChild(createCreatorName("Sokolan"));
  return footerContainer;
};

export default async function createDisplay(weather) {
  const body = document.querySelector("body");
  const container = createElement("div");
  container.id = "content";
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMainDisplay());
  container.appendChild(createFooter());
  mWeather = weather;
  updateWeatherAndLocation();
}
