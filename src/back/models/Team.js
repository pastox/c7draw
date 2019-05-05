var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var teamSchema = new mongoose.Schema({
    name : String,
    group : String,
    gender : Number
});

teamSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Team', teamSchema);