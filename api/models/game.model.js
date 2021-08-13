var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
    'game_id': {type:Schema.Types.ObjectId},
    'dashboard': {type:Object, required:true},
    'state': {type:String, required:true},
    'player': {type:Number, required:true},
    'next': {type:Number, required:true}
});

module.exports = mongoose.model('Game', gameSchema);