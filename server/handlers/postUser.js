const { MongoClient} = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const ObjectId = require('mongodb').ObjectId

const postUser = async(req, res) =>{
    const theUser = req.body;
    theUser._id = new ObjectId(theUser._id)

    const client = new MongoClient(MONGO_URI, options)

    try{
        await client.connect();
        const db = client.db("starpath")
        const result = db.collection("users")
        .insertOne({theUser});
        return res.status.json({ status:202, success:true, data:result})
    }catch(err){
        console.log(err)
    }finally{
        client.close();
    }
}

module.exports = { postUser };