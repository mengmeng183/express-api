var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
   category:{type:String},
   title:{ type:String, required:true},
   content:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post',PostSchema)
