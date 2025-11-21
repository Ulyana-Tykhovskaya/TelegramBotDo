import fetch from "node-fetch";
import { config } from "./config.js";

export const getWeather = async (ctx) => {
  const { latitude, longitude } = ctx.message.location;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${config.weatherApiKey}&q=${latitude},${longitude}&lang=ru`
    );
    const data = await response.json();

    if (data.current) {
      const condition = data.current.condition.text;
      const temp = data.current.temp_c;
      ctx.reply(`🌤 Погода: ${condition}, температура: ${temp}°C`);
    } else {
      ctx.reply("Не удалось получить прогноз 😔");
    }
  } catch (error) {
    console.error("Ошибка при запросе погоды:", error);
    ctx.reply("Произошла ошибка при получении погоды.");
  }
};
