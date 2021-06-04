'use strict';


module.exports = {
  async subscribeToTopic(token, topic) {
    return strapi.firebase.messaging().subscribeToTopic(token, topic)
      .then(function(response) {
        console.log("Successfully subscribe:", response);
      })
      .catch(function(error) {
        console.log("Error subscribe:", error);
      });

  },

  async unsubscribeToTopic(token, topic) {
    return strapi.firebase.messaging().unsubscribeToTopic(token, topic)
  },

  async send(topic, title,  message, actions) {
    const fcmIsEnabled = await strapi.plugins['firebase-cloud-messaging'].services.settings.isEnabled();
    if (fcmIsEnabled) {
      const payload = {
        topic: topic,
        notification: {
          title: title,
          body: message,
        },
        webpush: {
          notification: {
            actions
          },
        }
      };

      return strapi.firebase.messaging().send(payload)
        .then(function(response) {
          console.log("Successfully sent message:", response);
        })
        .catch(function(error) {
          console.log("Error sending message:", error);
        });
    }

    return Promise.resolve()
  }
};