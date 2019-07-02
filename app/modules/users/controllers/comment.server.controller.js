var Comment = require('mongoose').model('Comment');
var User = require('mongoose').model('User');

exports.postComment = function (req, res) {
    console.log('post comment')
    let userData = req.user;
    let data = {
        pageNumber: req.body.pageNumber,
        comment: req.body.comment,
        userId: userData._id
    }

    User.findById(userData._id, function (err, result) {
        data['firstName'] = result['firstName'];
        data['lastName'] = result['lastName'];
        saveComment();
    })

    function saveComment() {
        var comment = new Comment(data)

        comment.save(function (err, result) {
            if (err) {
                console.log('Error : ', err)
                res.status(422).send({
                    success: false,
                    message: 'Failed to save the comment'
                })
            } else {
                console.log('Saved')
                res.status(200).send({
                    pageNumber: req.body.comment,
                    role: userData.role,
                    commentedAt: Date.now(),
                    firstName: 'asdfasd',
                    lastName: 'asdfas'
                })
            }
        })
    }
}

exports.getComments = function (req, res) {
    console.log('1')
    let pageNumber = parseInt(req.params.pageNumber);
    Comment.find({
        pageNumber: pageNumber
    }, {_id: 0}, function (err, comments) {
        if (err) {
            console.log('Error', err)
            res.status(422).send([]);
        } else {
            res.status(200).send(comments);
        }
    })
}