const { ConversationBot } = require("@microsoft/teamsfx");
const { CalendarCommandHandler } = require("../commands/calendar");
const config = require("./config");

// Create bot.
const bot = new ConversationBot({
  // The bot id and password to create BotFrameworkAdapter.
  // See https://aka.ms/about-bot-adapter to learn more about adapters.
  adapterConfig: {
    appId: config.botId,
    appPassword: config.botPassword,
  },
  // Enable notification
  notification: {
    enabled: true,
  },
  command: {
    enabled: true,
    commands: [new CalendarCommandHandler()]
  }
});

module.exports = {
  bot,
};
