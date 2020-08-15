var  mongoose = require('mongoose');

var Schema = mongoose.Schema;

var membershipSchema = new Schema(
    {
        membership_id = {type : String, require : true , maxlenght : 10},
        detail = {type: String, require : true , maxlenght: 100},
        price = {type : Number , required : true}
    }
);

//Virtual
membershipSchema
.virtual('url')
.get(function(){
return '/catalog/Membership/' + this._id;
});

module.exports = mongoose.model('Membership','membershipSchema');