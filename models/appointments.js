var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var appointmentSchema = new Schema(
    {
        appointment_id : {type:Number, required : true, maxlength: 100 },
        customer_id : {type: Schema.Types.ObjectId, ref: 'Customer' , reuired : true},
        staff_id : {type: Schema.Types.ObjectId, ref: 'Staff' , required : true},
        date_Time : {type:Date, required : true},
        detail : {type: String, required : true , maxlength : 150}
    }

);

//Virtual 
appointmentSchema
.virtual('url')
.get(function(){
return '/catalog/appointment/' + this._id;

});

module.exports = mongoose.model('Appointment','appointmentSchema');