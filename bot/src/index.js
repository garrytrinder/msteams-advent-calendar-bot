const notificationTemplate = require("./adaptiveCards/notification-default.json");
const { bot } = require("./internal/initialize");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const restify = require("restify");
const path = require("path");
const { AdventCalendarBotActivityHandler } = require('./internal/activityHandler')

const activityHandler = new AdventCalendarBotActivityHandler();

// Create HTTP server.
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started, ${server.name} listening to ${server.url}`);
});

// HTTP trigger to send notification. You need to add authentication / authorization for this API. Refer https://aka.ms/teamsfx-notification for more details.
server.post(
  "/api/notification",
  restify.plugins.queryParser(),
  restify.plugins.bodyParser(), // Add more parsers if needed
  async (req, res) => {
    for (const target of await bot.notification.installations()) {
      const day = req.query.day;
      if (!day) {
        res.status(400);
        res.json({ error: "'day' query param is required" });
        return;
      }
      await target.sendAdaptiveCard(
        AdaptiveCards.declare(notificationTemplate).render({
          day: req.query.day,
        })
      );
    }

    res.json({});
  }
);

// Bot Framework message handler.
server.post("/api/messages", async (req, res) => {
  await bot.adapter.process(req, res, (context) => activityHandler.run(context))
});

// Serve static files.
server.get(
  '/*.html',
  restify.plugins.serveStatic({
    directory: path.join(__dirname, 'public')
  })
)
