'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var commentSchema = new Schema({
    pageNumber:{
        type: Number,
        required: true
    },
    comment: { type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true},
    commentedAt: {
        type: Date,
        default: Date.now()
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

mongoose.model('Comment', commentSchema);