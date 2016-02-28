'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  platform: String,
  genre: String
});

module.exports = mongoose.model('Game', GameSchema);
