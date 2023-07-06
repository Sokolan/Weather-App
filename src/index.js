import createDisplay from "./displayHandler"
import "./style/style.css";
import Weather from "./weather";

const mWeather = await Weather();
await createDisplay(mWeather);