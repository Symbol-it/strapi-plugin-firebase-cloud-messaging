'use strict';

/**
 * notification.js controller
 *
 * @description: A set of functions called "actions" of the `notification` plugin.
 */

module.exports = {
  subscribe: async (ctx)  => {
    const { token, uid } = ctx.request.body;
    await strapi.plugins.notifications.services.notification.subscribeToTopic(token, uid);

    ctx.send({
      message: 'ok'
    });
  },

  unsubscribe: async (ctx)  => {
    const { token, uid } = ctx.request.body;
    await strapi.plugins.notifications.services.notification.unsubscribeToTopic(token, uid);
    ctx.send({
      message: 'ok'
    });
  },
};

