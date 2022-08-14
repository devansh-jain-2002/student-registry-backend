const mongoose = require('mongoose')
const Student = mongoose.model('Student',{
    name : {
        type:String,
        required : true
    },
    roll :{
        type:Number ,
        required : true  
    },
    branch:{
        type: String ,
        required : true
    },
    userID:{
        type: String ,
        required : true
    }
})
module.exports = Student