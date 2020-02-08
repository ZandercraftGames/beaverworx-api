'use strict'
module.exports = function (app) {
  var beaverworx = require('../controllers/beaverworxController')

  // Event Routes
  app.route('/events')
    .get(beaverworx.list_all_events)
    .post(beaverworx.create_an_event)

  app.route('/events/:eventId')
    .get(beaverworx.read_an_event)
    .put(beaverworx.update_an_event)
    .delete(beaverworx.delete_an_event)
  
  // Task Routes
  app.route('/tasks')
    .get(beaverworx.list_all_tasks)
    .post(beaverworx.create_a_task)

  app.route('/tasks/:taskId')
    .get(beaverworx.read_a_task)
    .put(beaverworx.update_a_task)
    .delete(beaverworx.delete_a_task)
}
