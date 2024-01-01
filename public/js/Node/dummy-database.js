//╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//┃                                                                              ┃
//┃   Since the real database.js cannot be displayed due to database username    ┃
//┃                          and password are present.                           ┃
//┃            I made this dummy script so you can have a look at it.            ┃
//┃                                                                              ┃
//╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


//╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//┃                                                                              ┃
//┃     Please visit https://mongodb.github.io/node-mongodb-native/ for more     ┃
//┃                                 information                                  ┃
//┃                                                                              ┃
//╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<database_name>.jlm59ue.mongodb.net/?retryWrites=true&w=majority";
var app = express();

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get("/startDatabase", function(request, response) {
  async function run() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  run().catch(console.dir);
})

const dataToInsert = {
  email: 'exampleEmail@examplemail.com',
  password: '12345678'
};

const db = client.db('DATABASE_NAME');
const collection = db.collection('DATABASE_COLLECTION_NAME');

app.get("/insertData", function(request, response) {
  collection.insertOne(dataToInsert);
})

app.get("/terminate", function(request, response) {
  client.close();
  console.log("Database has been terminated.");
})

module.exports = app;
