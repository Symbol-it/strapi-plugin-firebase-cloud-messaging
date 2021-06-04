import React, {Component} from "react";

import {BaselineAlignment, CheckPagePermissions, request, SettingsPageTitle} from 'strapi-helper-plugin';
import {Bloc, Detail} from "./components";
import {Flex, Padded} from '@buffetjs/core';
import pluginPermissions from "../../permissions";
import {Header} from '@buffetjs/custom';

class SettingsPage extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      'enabled': false,
      'type': '',
      'project_id': '',
      'private_key_id': '',
      'private_key': '',
      'client_email': '',
      'client_id': '',
      'auth_uri': '',
      'token_uri': '',
      'auth_provider_x509_cert_url': '',
      'client_x509_cert_url': ''
    }
  }

  componentDidMount() {
    this.getInfos().then(data => {
      this.state = data
    });
  }

  getInfos = async () => {
    try {
      return await request('/firebase-cloud-messaging/settings', {
        method: 'GET',
      });
    } catch (e) {
      strapi.notification.error("Error during retrive migration informations.")
    }

    return {}
  };


  render() {
    return (
      <CheckPagePermissions permissions={pluginPermissions.settings}>
        <SettingsPageTitle name="Firebase Cloud Messaging"/>
        <Header title={{ label: "Firebase Cloud Messaging"}} content="Settings" />
        <Bloc>
          <Padded left right top size="smd">
            <Padded left right top size="xs">
              <Flex justifyContent="space-between">
                <Detail
                  title="Enabled"
                  content={`${this.state.enabled}`}
                />
              </Flex>
            </Padded>
          </Padded>
          <BaselineAlignment top size="60px" />
        </Bloc>
      </CheckPagePermissions>
    );
  }
}

export default SettingsPage;

