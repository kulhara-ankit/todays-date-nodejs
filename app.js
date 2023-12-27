const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  response.send(newDate);
});

module.exports = app;
