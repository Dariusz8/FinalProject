const { MongoClient } = require("mongodb");
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const getQuestPictures = async(req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        client.connect();
        const db = client.db("starpath");
        const data = await db.collection("quests").find({}).toArray();
        console.log(data);

        data.length > 0
        ? res.status(200).send({ status:200, success:true, data:data})
        : res.status(404).send({ status:404, success:false, data:"Quest pictures not found"})
    }catch(err){
        console.log(err)
    }finally{
        client.close();
    }
}

module.exports = { getQuestPictures };