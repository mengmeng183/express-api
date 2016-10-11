var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
   title:{ type:String, required:true},
   category:{type:String},
   content:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post',PostSchema)
