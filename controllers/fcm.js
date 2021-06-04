'use strict';

/**
 * notification.js controller
 *
 * @description: A set of functions called "actions" of the `notification` plugin.
 */

module.exports = {
  subscribe: async (ctx)  => {
    const { token, uid } = ctx.request.body;
    await strapi.plugins['firebase-cloud-messaging'].services.fcm.subscribeToTopic(token, uid);

    ctx.send({
      message: 'ok'
    });
  },

  unsubscribe: async (ctx)  => {
    const { token, uid } = ctx.request.body;
    await strapi.plugins['firebase-cloud-messaging'].services.fcm.unsubscribeToTopic(token, uid);
    ctx.send({
      message: 'ok'
    });
  },
};

