import React, {Component} from "react";
import Row from "../Row";
import {InputText, Label, Button, Toggle} from "@buffetjs/core";
import {request} from "strapi-helper-plugin";

class MailjetConfigForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      emailEnabled: false,
      notificationEnabled: false,
      smsEnabled: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getConfig().then(config => {
      this.setState({
        emailEnabled: config.emailEnabled,
        notificationEnabled: config.notificationEnabled,
        smsEnabled: config.smsEnabled,
      });
    });
  }

  getConfig = async () => {
    try {
      const response = await request("/notifications/configuration", {
        method: "GET"
      });


      return response.data;
    } catch (e) {
      strapi.notification.error(`${e}`);
    }
    return [];
  };

  saveConfig = async () => {
    try {
      const data = {
        emailEnabled: this.state.emailEnabled,
        notificationEnabled: this.state.notificationEnabled,
        smsEnabled: this.state.smsEnabled,
      }

      await request('/notifications/configuration', {
        method: "PUT",
        body: data
      });

      strapi.notification.success(`Configuration saved.`);
    } catch (e) {
      strapi.notification.error(`${e}`);
    }
    return [];
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    return (
      <div>
        <Row className={"row"}>
          <div className={"col-4"}>
            <Label htmlFor="emailEnabled">Email enabled</Label>
            <Toggle name="emailEnabled" value={this.state.emailEnabled} onChange={this.handleChange}/>
          </div>
          <div className={"col-4"}>
            <Label htmlFor="smsEnabled">SMS enabled</Label>
            <Toggle name="smsEnabled" value={this.state.smsEnabled} onChange={this.handleChange}/>
          </div>
          <div className={"col-4"}>
            <Label htmlFor="notificationEnabled">Notification PWA enabled</Label>
            <Toggle name="notificationEnabled" value={this.state.notificationEnabled} onChange={this.handleChange}/>
          </div>
        </Row>
        <Row className={"row"}>
          <div className={"col-4"}>
            <Button label={'Save'} onClick={this.saveConfig}/>
          </div>
        </Row>
      </div>
    );
  }
}

export default MailjetConfigForm