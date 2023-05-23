const { MongoClient} = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const ObjectId = require('mongodb').ObjectId

const patchUser = async(req, res) =>{
    const theUser = req.body;
    if (!(theUser.email )) {
        theUser._id = new ObjectId(theUser._id);
      }
    const client = new MongoClient(MONGO_URI, options)

    try{
        await client.connect();
        const db = client.db("starpath");
        const result = await db.collection("users")
        .updateOne({ email:theUser.email }, { $set: theUser })

        if(result.modifiedCount ===1){
            res.status(202).json({ status:202, success:true, data: "There has been an awakening. Have you felt it?"})
        }
        else if(result.modifiedCount === 0 && result.matchedCount ===1){
            res.status(200).json({ status:200, success:false, data:"Do. Or do not. There is no try"})
        }
        else{
            res.status(404).json( {status:404, success: false, data:"I have a bad feeling about this"})
        }
    }catch(err){
        console.log(err.message)
    }finally{
        client.close();
    }
}

module.exports = { patchUser };