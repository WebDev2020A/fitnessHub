var mongose = require('mongose');

var Schema = mongoose.Schema;

var customerSchema = new Schema(
    {
      first_name : {type: String, required: true , maxlength: 100},
      last_name : {type:String, required : true, maxlength:100},
      email : {type : String , required : true , maxlength:100 },
      phone : {type : Number, required : true , maxlength: 10},
      date_of_birth : {type:Date},
      st_adress : {type:String, reuquired: true, maxlength:100},
      city : {type: String, required : true, maxlength:100},
      province : {type: String , required : true , maxlength:100},
      postal_code : {type:String, required : true, maxlength:6}
    },
    { timestamps: {createdAt : 'created_at' } }
);

//Virtual for customer's fullname
customerSchema
.virtual('name')
.get(function () {
 
    var fullname = '';
    if(this.first_name && this.last_name) {
        fullname = this.first_name + " " + this.last_name
    }
     if( !this.fisrt_name || !this.last_name ) {
         funllname = '';
     }
     
     return fullname;
});


// Virtual for customer's URL
customerSchema
.virtual('url')
.get(function () {
  return '/catalog/customer/' + this._id;
});

//Export model
module.exports = mogoose.model('Customer', 'customerSchema' );