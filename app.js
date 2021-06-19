const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    scriptureApi = require('scripture-api');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json())


