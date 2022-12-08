const { TeamsActivityHandler } = require('botbuilder');
const data = require('../data.json');

class AdventCalendarBotActivityHandler extends TeamsActivityHandler {

  handleTeamsTaskModuleFetch(context, taskModuleRequest) {
    const { day } = taskModuleRequest.data.data;
    const content = data.day.find(d => d.id === Number(day));

    const date = new Date().getDate();
    const isOpen = day <= date;

    const url = isOpen
      ? `${process.env.SITE_ENDPOINT}/open-door.html?url=${encodeURIComponent(content.url)}`
      : `${process.env.SITE_ENDPOINT}/closed-door.html`;

    const title = isOpen
      ? content.title
      : 'Door is closed';

    const taskInfo = {
      url,
      height: 'large',
      width: 'large',
      title
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
