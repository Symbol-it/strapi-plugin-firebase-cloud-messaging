module.exports = async (ctx, next) => {
  const pwaNotificationIsEnabled = await strapi.plugins.notifications.services.configuration.pwaNotificationIsEnabled();
  if (pwaNotificationIsEnabled) {
    return await next();
  }

  ctx.methodNotAllowed();
};