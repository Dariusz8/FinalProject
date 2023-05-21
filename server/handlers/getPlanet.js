const { connect } = require("http2");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const ObjectId = require('mongodb').ObjectId

const getPlanet = async(req, res) => {
    const id = req.params.id;
    
    const client = new MongoClient(MONGO_URI, options)

try{
    await client.connect();
    const db = client.db("starpath");
    const planet = await db.collection("allplanets").findOne({ "_id": new ObjectId(id)})

    if(planet){
        res.status(200).send({ status:200, success:true, data:planet});
    }else{
        res.status(404).send({ status: 404, success: false, data:"Planet not found"})
    }
} catch(err){
    console.log(err.message);
}finally{
    client.close();
}
}
module.exports = { getPlanet };
