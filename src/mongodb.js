
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://petlgunjr:3rQQ7jWs19@cluster0-dvhjb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
    console.log("collection in progress!!")
  client.close();
});
