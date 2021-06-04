'use strict';
const admin = require("firebase-admin");

module.exports = async () => {
  await strapi.plugins['firebase-cloud-messaging'].services.settings.init();

  const settings = await strapi.plugins['firebase-cloud-messaging'].services.settings.get();

  admin.initializeApp({
    credential: admin.credential.cert(settings)
  });

  strapi.firebase = admin;

  const actions = [
    {
      section: 'settings',
      category: 'firebase-cloud-messaging',
      displayName: 'Access the firebase cloud messaging settings',
      uid: 'settings.read',
      pluginName: 'firebase-cloud-messaging'
    }
  ]

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
