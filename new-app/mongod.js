const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='my-db'

MongoClient.connect(connectionURL,{ useNewUrlParser: true},(error,client)=>{
    if(error){
        console.log("Error!");
        return;
    }
    const db=client.db(databaseName)
})