'use strict';
module.exports = function(app) {
  var beaverworx = require('../controllers/beaverworxController');

  // todoList Routes
  app.route('/events')
    .get(beaverworx.list_all_events)
    .post(beaverworx.create_an_event);


  app.route('/events/:eventId')
    .get(beaverworx.read_an_event)
    .put(beaverworx.update_an_event)
    .delete(beaverworx.delete_an_event);
};
