'use strict';

/**
 * mailjet.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const storeUtils = require('../services/utils/store');
const configKey = 'notifications';

module.exports = {
  async get() {
    return await storeUtils.getModelConfiguration(configKey);
  },

  async update(config) {
    return await storeUtils.setModelConfiguration(configKey, config);
  },

  async pwaNotificationIsEnabled() {
    const config =  await this.get();
    return config.notificationEnabled;
  },

  async smsIsEnabled() {
    const config =  await this.get();
    return config.smsEnabled;
  },

  async emailIsEnabled() {
    const config =  await this.get();
    return config.emailEnabled;
  }
};
