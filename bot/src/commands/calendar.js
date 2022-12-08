const { MessageFactory } = require("botbuilder")

class CalendarCommandHandler {

  triggerPatterns = 'calendar'

  async handleCommandReceived(context, message) {
    return MessageFactory.text('Calendar command received');
  }

}

module.exports = {
  CalendarCommandHandler
}
