import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getWeather } from "./weather.js";
import { getCat } from "./cat.js";
import { showMenu, clouseMenu } from "./menu.js";

const bot = new Telegraf(config.telegramToken);

bot.start((ctx) =>
  ctx.reply("Добро пожаловать в бот. Для начала напишите меню")
);

bot.on("message", (ctx) => {
  const msg = ctx.message;
  if (!msg) return;

  const chatId = ctx.chat.id; 

  if (msg.text?.toLowerCase() === "меню") {
    showMenu(bot, chatId);
  } else if (msg.location) {
    getWeather(ctx);
  } else if (msg.text === "Получить мем кота") {
    getCat(ctx);
  } else {
    clouseMenu(bot, chatId);
  }
});

bot.launch();
