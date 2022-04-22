
export const getWeather = async (lat, lon) => {
    const weatherIcon = {
        "Clouds": "fa-cloud",
        "Rain": "fa-umbrella",
        "Clear": "fa-sun",
        "Snow": "fa-snowflake",
    }

    // API_KEY 숨길 방법이 필요함. 환경변수 불가
    const WEATHER_API_KEY = "d325bc7c04d8e6c362499ea0e8ef735c";

    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=kr&units=metric`;
    const { weather, name, main } = await (
        await fetch(requestUrl)
    ).json();

    return {
        name,
        temp: main.temp,
        weather: weatherIcon[weather[0].main],
    }
};

export const onFailed = () => alert("위치 정보 공유를 허락해주세요.");
