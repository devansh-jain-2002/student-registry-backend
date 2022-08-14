const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student-db')

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

const me = new Student({
    name:'Devansh',
    roll: 210321,
    branch: 'CSE',
    userID: 'jdevansh21'
})
me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log('Error',error);
})