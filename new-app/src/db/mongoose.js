const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student-db')


// const me = new Student({
//     name:'Devansh',
//     roll: 210321,
//     branch: 'CSE',
//     userID: 'jdevansh21'
// })
// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })