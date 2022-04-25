import { makeElementTag, makeIconTag } from './makeHtmlTag.js';
import { getWeather, onFailed } from './weather.js';

class MainLayout extends HTMLElement {
    connectedCallback() {
        const header = makeElementTag({
            element: "header",
            id: "navigation"
        });
        const weatherContainer = makeElementTag({
            element: "div",
            id: "weather_container"
        });

        const weatherIconBox = makeElementTag({
            element: "div",
            id: "weather_icon"
        });

        const weatherIcon = makeIconTag({
            iconName: "fas",
            id: "weather_icon"
        });

        const weatherInfo = makeElementTag({
            element: "div",
            id: "weather_info"
        });
        const weatherCity = makeElementTag({
            element: "h3",
            id: "weather_city"
        });
        const weatherTemp = makeElementTag({
            element: "h3",
            id: "weather_temp"
        });

        const navigationButtons = makeElementTag({
            element: "div",
            id: "navigation_buttons"
        })

        weatherContainer.appendChild(weatherIconBox);
        weatherIconBox.appendChild(weatherIcon);
        weatherInfo.appendChild(weatherCity);
        weatherInfo.appendChild(weatherTemp);
        weatherContainer.appendChild(weatherInfo);

        header.append(weatherContainer, navigationButtons);

        const getWeatherHtml = async ({ coords: { latitude: lat, longitude: lon } }) => {
            const { name, temp, weather } = await getWeather(lat, lon);

            weatherIcon.classList.add(weather);
            weatherCity.textContent = name;
            weatherTemp.textContent = `${temp} °C`;
        }

        navigator.geolocation.getCurrentPosition(getWeatherHtml, onFailed);
        return this.prepend(header)
    }
}

const initialState = () => {
    localStorage.removeItem("EditMode");
}

customElements.define("main-layout", MainLayout);
window.addEventListener("DOMContentLoaded", initialState)


