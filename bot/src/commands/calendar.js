const { MessageFactory, CardFactory } = require("botbuilder")
const data = require('../data.json');
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const calendarCard = require('../adaptiveCards/calendar.json');

class CalendarCommandHandler {

  triggerPatterns = 'calendar'

  async handleCommandReceived(context, message) {
    const cardData = { ...data, siteendpoint: process.env.SITE_ENDPOINT };
    const cardJson = AdaptiveCards.declare(calendarCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }

}

module.exports = {
  CalendarCommandHandler
}
