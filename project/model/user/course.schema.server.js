
module.exports = function () {
    var mongoose = require("mongoose");
    var CourseSchema = mongoose.Schema({
        coursename: String
    }, {collection: 'taportal.course'});
    return CourseSchema;
};