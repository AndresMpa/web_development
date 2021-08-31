const express = require("express");
const router = require("./router");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/websocket", router);

app.set("port", process.env.PORT || 3000);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port") + " on dev");
  });
}

module.exports = app;
