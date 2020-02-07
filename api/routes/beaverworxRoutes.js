'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/beaverworxController');

  // todoList Routes
  app.route('/events')
    .get(beaverworx.list_all_events)
    .post(beaverworx.create_an_event);


  app.route('/events/:eventId')
    .get(todoList.read_an_event)
    .put(todoList.update_an_event)
    .delete(todoList.delete_an_event);
};
