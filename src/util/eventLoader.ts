import { Client } from "discord.js";

const { readdir } = require("fs");

module.exports = async (client: Client) => {
  readdir("./src/events/", (err: any, files: any) => {
    if (err) return console.error(err);

    files.forEach((file: any) => {
      const event = require(`../events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
};
