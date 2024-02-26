const express = require("express");
const app = express();
const { Client } = require("@line/bot-sdk");

const config = {
  channelAccessToken:
    "ucLd77AgQLu0xQSHpZ7GyBDDNYjneeJ1Bgk9X+36oJF+HsMJIGK8Cum8jp08PePtMnlhBa2Bmk92SeNmwsusT216l+RNWYEtHzgV3t/fValmiIO7EqfL4Mw4uho9qPV6WWz30lmYDxSQmaLwm6KOXAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "7a5dcb04527e79f2e1945818fd23c6bb",
};

const client = new Client(config);

app.post("/send-notification", (req, res) => {
  const message = {
    type: "text",
    text: "Hello, this is a LINE notification!",
  };

  const userId = "poatlyo45617";
  client
    .pushMessage(userId, message)
    .then(() => {
      res.send("Notification sent successfully");
    })
    .catch((err) => {
      console.error("Failed to send notification:", err);
      res.status(500).send("Failed to send notification" +);
    });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
