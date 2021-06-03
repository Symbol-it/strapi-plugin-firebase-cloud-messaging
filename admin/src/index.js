import React from 'react';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import { CheckPagePermissions } from 'strapi-helper-plugin';
import FCMSettingsPage from './containers/FCMSettingsPage';
import pluginPermissions from './permissions';

export default strapi => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon: pluginPkg.strapi.icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: pluginPkg.strapi.required || false,
    layout: null,
    lifecycles: () => { },
    mainComponent: null,
    name: pluginPkg.strapi.name,
    preventComponentRendering: false,
    settings: {
      menuSection: {
        id: pluginId,
        title: 'FCM',
        links: [
          {
            name: 'fcm settings',
            permissions: pluginPermissions.settings,
            title: {
              id: `${pluginId}.settings`,
              defaultMessage: 'Settings',
            },
            to: `${strapi.settingsBaseURL}/${pluginId}`,
            Component: () => (
              <CheckPagePermissions permissions={pluginPermissions.settings}>
                <FCMSettingsPage />
              </CheckPagePermissions>
            ),
          },
        ],
      }
    },
    trads: {},
  };

  return strapi.registerPlugin(plugin);
};
