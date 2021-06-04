'use strict';

/**
 * notification.js controller
 *
 * @description: A set of functions called "actions" of the `notification` plugin.
 */

module.exports = {
  get: async (ctx) => {
    ctx.body = await strapi.plugins['firebase-cloud-messaging'].services.settings.get();
  },

  save: async (ctx) => {
    const settings = strapi.plugins['firebase-cloud-messaging'].services.settings.update(ctx.request.body);
    return ctx.send({data: settings, ok: true});
  },
};

