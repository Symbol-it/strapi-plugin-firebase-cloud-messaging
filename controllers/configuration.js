'use strict';

/**
 * notification.js controller
 *
 * @description: A set of functions called "actions" of the `notification` plugin.
 */

module.exports = {

  get: async (ctx) => {
    const configuration = await strapi.plugins.notifications.services.configuration.get();
    return ctx.send({ data: configuration,  ok: true });
  },

  save: async (ctx) => {
    const configuration = await strapi.plugins.notifications.services.configuration.update(ctx.request.body);
    return ctx.send({data: configuration, ok: true});
  },
};

