const express = require('express')
require('./db/mongoose')
const Student = require('./models/student')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.get('/students',(req,res)=>{
    Student.find(
        {"name":{$regex : req.body.name?req.body.name:"",$options:'i'},
        "roll":{$regex : req.body.roll?req.body.roll:"",$options:'i'},
        "userID":{$regex : req.body.userID?req.body.userID:"",$options:'i'},
        "branch":{$regex : req.body.branch?req.body.branch:"",$options:'i'},}).then((students)=>{
        res.send(students)
    }).catch((e)=>{
        res.status(500).send()
    })
})
app.get('/students/:roll',(req,res)=>{
    Student.find({
        "roll":req.params.roll}).then((students)=>{
        res.send(students)
    }).catch((e)=>{
        res.status(500).send()
    })
})
app.get('/students/:roll/sg',(req,res)=>{
    Student.find({
        "roll":req.params.roll}).then((students)=>{
        res.redirect('/students/'+students[0].StudentGuideRoll)
    }).catch((e)=>{
        res.status(500).send()
    })
})
app.get('/students/:roll/bacchas',(req,res)=>{
    Student.find({
        "roll":req.params.roll}).then((students)=>{
            // Bacchas=[];
            // students.BacchasRollNo.forEach((rollno)=>{
            //     Student.find("roll":rollno)
            // })
            res.send(students[0].BacchasRollNo)
        })
})
app.post('/students',(req,res)=>{
    const student = new Student(req.body)
    student.save().then(()=>{
        res.send(student)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
app.patch('/students/:roll',(req,res)=>{
    Student.findOneAndUpdate(req.params,req.body,{new:true}).then((user)=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
app.delete('/students/:roll',(req,res)=>{
    Student.deleteOne(req.params).then(()=>{
        res.send("Deleted Successfully")
    })
    .catch(()=>{
        res.send("Error")
    })
})
app.listen(port,()=>{
    console.log('Server is Up on',port)
})
