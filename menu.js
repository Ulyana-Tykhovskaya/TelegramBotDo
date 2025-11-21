export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Выберите действие", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Узнать погоду",
            request_location: true,
          },
        ],
        ["Получить мем кота"],
        ["Закрыть"],
      ],
      resize_keyboard: true,
    },
  });
};

export const clouseMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Клавиатура закрыта", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
