var authController = require('../controllers/auth.server.controller');

module.exports = function (app) {

    app.route('/api/auth/signup')
        .post(authController.signup);

    app.route('/api/auth/signin')
        .post(authController.signin);

    app.route('/api/auth/signout')
        .get(authController.signout);

}
