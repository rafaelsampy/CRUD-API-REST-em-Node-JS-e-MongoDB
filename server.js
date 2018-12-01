const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const mongodb = require('./db/mongodb.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongodb.db, {useNewUrlParser: true});
requireDir('./SRC/models');

app.use('/api', require('./SRC/routes'));

app.listen(4000);