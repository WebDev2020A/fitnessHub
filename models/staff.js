var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StaffSchema = new Schema(
    {
        first_name: {type: String, required: true, maxlength: 100},
        last_name: {type: String, required: true, maxlength: 100},
        email: {type: String, required: true, maxlength: 100},
        phone: {type: Number, required: true, maxlength: 10},
        st_address: {type: String, required: true, maxlength: 100},
        city: {type: String, required: true, maxlength: 50 },
        province: {type: String, require: true, maxlength: 5},
        postal_code: {type: String, required: true, maxlength: 6},
        date_of_birth: {type: Date},
        position: {type: String, required: true, maxlength: 50}
    },
    { timestamps: { createdAt: 'joined_on' } }
    
)

StaffSchema.virtual('name').get(function(){
    var fullname = '';
    if(this.first_name && this.last_name){
        fullname = this.first_name+' '+this.last_name
    }
    if(!this.first_name || !this.last_name){
        fullname = '';
    }

    return fullname;
});

StaffSchema.virtual('url').get(function(){
    return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Staff', StaffSchema);