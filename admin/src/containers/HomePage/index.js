/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import Block from "../../components/Block";
import NotificationsConfigForm from "../../components/NotificationsConfigForm";

const NotificationsConfigPage = () => {
  return (
    <div className="row">
      <Block
        title="Notifications"
        description="Configuration of notifications"
        style={{ marginBottom: 12 }}
      >
        <NotificationsConfigForm />
      </Block>
    </div>
  );
};

export default memo(NotificationsConfigPage);
