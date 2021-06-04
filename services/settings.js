'use strict';

const key = 'settings';

module.exports = {
  pluginStore() {
    return strapi.store({
      environment: '',
      type: 'plugins',
      name: 'notifications',
    });
  },

  defaultSettings() {
    return {
      'enabled': false,
      'type': 'zeazeaeazzae',
      'project_id': 'zeazeaeazzae',
      'private_key_id': 'zeazeaeazzae',
      'private_key': 'zeazeaeazzae',
      'client_email': 'zeazeaeazzae',
      'client_id': 'zeazeaeazzae',
      'auth_uri': 'zeazeaeazzae',
      'token_uri': 'zeazeaeazzae',
      'auth_provider_x509_cert_url': 'zeazeaeazzae',
      'client_x509_cert_url': 'zeazeaeazzae'
    };
  },

  async init() {
    const pluginStore = this.pluginStore();
    const settingsFromStore = await pluginStore.get({ key });
    if (settingsFromStore) {
      const settings = this.defaultSettings()
      await this.set(settings)
    }
  },

  async get() {
    const pluginStore = this.pluginStore();
    return await pluginStore.get({ key });
  },

  async set(settings) {
    const pluginStore = this.pluginStore();
    const settingsFromStore = await pluginStore.get({ key });

    const settingsValues = { ...this.defaultSettings(), ...settingsFromStore, ...settings };

    await pluginStore.set({ key , value: settingsValues });
  },

  async isEnabled() {
    const config = await this.get();
    return config.enabled;
  },
};
