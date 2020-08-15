var mongoose = require('mogoose');

var Schema = mongoose.Schema;

var merchandiseSchema = new Schema (
    {
        merchandise_id = {type: String , require : true , maxlength:10},
        detail = {type: String, require : true , maxlenght: 100},
        price = {type : Number , required : true}
    }
);

// Virtual
merchandiseSchema
.virtaul('url')
.get(function(){
return 'catalog/merchandise/' + this._id;
});

module.exports = mongoose.model('Merchandise','merchandiseSchema');