var commentController = require('../controllers/comment.server.controller');
var authMiddleware = require('../../../middlewares/auth.server.middlewares');

module.exports = function(app){
    app.route('/api/comment')
    .post(authMiddleware.isAuthenticated, commentController.postComment);

    app.route('/api/comment/:pageNumber')
    .get(authMiddleware.isAuthenticated, commentController.getComments);
}