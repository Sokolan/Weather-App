export default async function weather(location) {
  try {
    console.log("a");
    const weatherAt = await fetch(`http://api.weatherapi.com/v1//current.json?key=1b03c9929d6544bfa68193127232906&q=${location}`);
    const json = await weatherAt.json();
    console.log("b");
    console.log(json);
  }
  catch (error) {
    console.log(`error: ${error}`);
  }
}

// 1b03c9929d6544bfa68193127232906