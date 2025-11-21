import axios from "axios";
import { config } from "./config.js";

export const getCat = async (ctx) => {
  try {
    const response = await axios.get(config.catUrl);
    const cat = response?.data[0];

    if (cat?.url) {
      await ctx.replyWithPhoto(cat.url, {
        caption: "Вот тебе мемный котик 🐱",
      });
    } else {
      ctx.reply("Не удалось получить кота 😿");
    }
  } catch (error) {
    console.error("Ошибка при получении кота:", error);
    ctx.reply("Произошла ошибка при получении кота.");
  }
};
