'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Please send the name of the event'
  },
  Event_Date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['upcoming', 'completed']
    }],
    default: ['upcoming']
  }
});

module.exports = mongoose.model('Events', EventSchema);