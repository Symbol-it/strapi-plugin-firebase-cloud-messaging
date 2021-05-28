'use strict';

module.exports = {
  async send(to, from, subject, text, html) {
    const emailIsEnabled = await strapi.plugins.notifications.services.configuration.emailIsEnabled();
    if (emailIsEnabled) {
      return await strapi.plugins['email'].services.email.send({
        to,
        from,
        subject,
        text,
        html
      });
    }

    return Promise.resolve()
  },
};
