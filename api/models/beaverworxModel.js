'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Please send the name of the event'
  },
  Event_Date: {
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
  Task_Date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['upcoming', 'in-progress','completed']
    }],
    default: ['upcoming']
  }
})

module.exports = mongoose.model('Events', EventSchema)
module.exports = mongoose.model('Tasks', TaskSchema)
