const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const jsonServer =  require("json-server");
const cors = require("cors");

setGlobalOptions({ maxInstances: 1, region: "europe-west4" });

const app = express();

app.use(cors());
app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);
app.use(jsonServer.router("db.json"));

exports.api = onRequest(app);