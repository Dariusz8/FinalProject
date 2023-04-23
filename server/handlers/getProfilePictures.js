const { MongoClient } = require("mongodb")
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const getProfilePictures = async(req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try{
        client.connect();
        const db = client.db("starpath");
        const data = await db.collection("profilepictures").find({}).toArray();

        data.length > 0
        ? res.status(200).send({ status: 200, success:true, data:data})
        : res.stauts(404).send({ status:404, success:false, data: "Profile pictures were not found"})
    }catch(err){
        console.log(err);
    }finally{
        client.close();
    }
}

module.exports = { getProfilePictures}