var User = require('mongoose').model('User');
var authMiddleware = require('../../../middlewares/auth.server.middlewares');
var usersDbo = require('../dbo/users.server.dbo');
var sessionsDbo = require('../dbo/session.server.dbo');
var async = require('async');
var _ = require('lodash');
var crypto = require('crypto');

exports.me = function (req, res) {
    usersDbo.findUserByUsername(req.email, function (err, result) {
        if (err) {
            res.status(400).send({
                success: false,
                message: err
            })
        } else {
            let userData = {
                email: result.email,
                _id: result._id,
                role: result.role,
                firstName: result.firstName,
                lastName: result.lastName
            }
        
            res.status(200).send(userData);
        }
    })
}
