'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
  name: String,
  dascription: String,
  category: String,
  year: Number,
  langs: String,
  image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
//projects --> guarda en esa colección
