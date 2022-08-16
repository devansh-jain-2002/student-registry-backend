const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/student-db')

const Student = require('../models/student')

const student1 ={
    "name": "Sandipan Dutta",
    "roll": "210925",
    "branch": "CE",
    "userID": "sadipand21",
    "StudentGuideRoll":"200050"
}
const student2 ={
    "name": "Devansh Jain",
    "roll": "210321",
    "branch": "CSE",
    "userID": "jdevansh21",
    "StudentGuideRoll":"200050"
}

const student3 ={
    "name":"Shivam Sharma",
    "roll":"210983",
    "branch":"EE",
    "userID":"sshivam21",
    "StudentGuideRoll":"200050"
}

const student4 ={
    "name":"Yuvraj Kharayat",
    "roll":"211208",
    "branch":"CSE",
    "userID":"yuvraj21",
    "StudentGuideRoll":"201070"
}
const student5={
    "name":"Aditya Tiwari",
    "roll":"200050",
    "branch":"CE",
    "userID":"adityat20",
    "BacchasRollNo":["210925","210321","210983"]
}
const student6={
    "name":"Utkarsh Srivastava",
    "roll":"201070",
    "branch":"CE",
    "userID":"utkarshs20",
}
stu1=new Student(student1);
stu2=new Student(student2);
stu3=new Student(student3);
stu4=new Student(student4);
stu5=new Student(student5);
stu6=new Student(student6);
stu1.save();
stu2.save();
stu3.save();
stu4.save();
stu5.save();
stu6.save();