const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const ObjectId = require('mongodb').ObjectId

const getUser = async(req, res) => {
    const id = req.params.id;
    const client = new MongoClient(MONGO_URI, options)

    try{
        await client.connect();
        const db = client.db("starpath");
        const user = await db.collection("users").findOne({ "_id": new ObjectId(id)})

        if(user){
            res.status(200).json({ status:200, success:true, data:"The force is strong with this one", user})
        }else{
            res.status(404).json({ status:404, success:false, data:"Not found, the user has been"})
        }

    }catch(err){
        console.log(err);
    }finally{
        client.close();
    }
}

module.exports = { getUser };