'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Please send the name of the event'
  },
  description: {
    type: String,
    required: 'Please send a description of the event'
  },
  location: {
    type: String,
    required: 'Please send the location of the event'
  },
  date: {
    type: String,
    required: 'Please send the date of the event'
  },
  status: {
    type: [{
      type: String,
      enum: ['upcoming', 'completed']
    }],
    default: ['upcoming']
  }
})

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Please send the name of the task'
  },
  description: {
    type: String,
    required: 'Please send the description of the task'
  },
  priority: {
    type: [{
      type: String,
      enum: ['low', 'normal', 'high']
    }],
    default: ['normal']
  },
  Created_Date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['incomplete', 'in-progress', 'completed']
    }],
    default: ['incomplete']
  }
})

module.exports = mongoose.model('Events', EventSchema)
module.exports = mongoose.model('Tasks', TaskSchema)
