const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db');
app.use(bodyParser.json());

const collection = "todo";
