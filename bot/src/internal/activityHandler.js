const { TeamsActivityHandler } = require('botbuilder');
const data = require('../data.json');

class AdventCalendarBotActivityHandler extends TeamsActivityHandler {

  handleTeamsTaskModuleFetch(context, taskModuleRequest) {
    const { day } = taskModuleRequest.data.data;
    const content = data.day.find(d => d.id === Number(day));

    const taskInfo = {
      url: `${process.env.SITE_ENDPOINT}/open-door.html?url=${encodeURIComponent(content.url)}`,
      height: 'large',
      width: 'large',
      title: content.title
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
