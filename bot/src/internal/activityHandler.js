const { TeamsActivityHandler } = require('botbuilder')

class AdventCalendarBotActivityHandler extends TeamsActivityHandler {

  handleTeamsTaskModuleFetch(context, taskModuleRequest) {
    const taskInfo = {
      url: 'https://c82e-86-166-248-5.ngrok.io/open-door.html',
      height: 'large',
      width: 'large',
      title: 'Door'
    }

    return {
      task: {
        type: 'continue',
        value: taskInfo
      }
    }
  }

}

module.exports.AdventCalendarBotActivityHandler = AdventCalendarBotActivityHandler
