'use strict'

var mongoose = require('mongoose')
var Event = mongoose.model('Events')
var Task = mongoose.model('Tasks')

exports.list_all_events = function (req, res) {
  Event.find({}, function (err, event) {
    if (err) { res.send(err) }
    res.json(event)
  })
}

exports.create_an_event = function (req, res) {
  var newEvent = new Event(req.body)
  newEvent.save(function (err, event) {
    if (err) { res.send(err) }
    res.json(event)
  })
}

exports.read_an_event = function (req, res) {
  Event.findById(req.params.eventId, function (err, event) {
    if (err) { res.send(err) }
    res.json(event)
  })
}

exports.update_an_event = function (req, res) {
  Event.findOneAndUpdate({ _id: req.params.eventId }, req.body, { new: true }, function (err, event) {
    if (err) { res.send(err) }
    res.json(event)
  })
}

exports.delete_an_event = function (req, res) {
  Event.remove({
    _id: req.params.eventId
  }, function (err, event) {
    if (err) { res.send(err) }
    res.json({ message: 'Event successfully deleted' })
  })
}
exports.list_all_tasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.create_a_task = function (req, res) {
  var newTask = new Task(req.body)
  newTask.save(function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.delete_a_task = function (req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err) { res.send(err) }
    res.json({ message: 'Task successfully deleted' })
  })
}
