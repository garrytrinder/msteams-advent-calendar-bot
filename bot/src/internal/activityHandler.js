const { TeamsActivityHandler } = require('botbuilder')

class AdventCalendarBotActivityHandler extends TeamsActivityHandler {

  handleTeamsTaskModuleFetch(context, taskModuleRequest) {
    const taskInfo = {
      url: `${process.env.SITE_ENDPOINT}/open-door.html`,
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
