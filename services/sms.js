'use strict';

module.exports = {
  async send(destinationNumber, message) {
    const smsIsEnabled = await strapi.plugins.notifications.services.configuration.smsIsEnabled();
    if (smsIsEnabled) {
      const accountSid = 'ACceb3ae3d7b3a8951e1933dc9dcf4ec92';
      const authToken = '2ee58cd38ea8203adc380199e95d87b4';
      const client = require('twilio')(accountSid, authToken);

      return client.messages
        .create({
          body: message,
          from: '+33644609889',
          to: destinationNumber
        })
        .then(message => console.log(message.sid));
    }

    return Promise.resolve()
  },
};
