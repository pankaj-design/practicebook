const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri =
//   "mongodb+srv://Pankaj:P%40nkaj96@cluster0.iaviw6h.mongodb.net/engvocab?retryWrites=true&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
// }
// }
// run().catch(console.dir);



// const DB = 'mongodb+srv://Pankaj:P%40nkaj96@cluster0.iaviw6h.mongodb.net/engvocab?retryWrites=true&w=majority'
const DB = process.env.DATABASE;
mongoose.connect(DB).then( () => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));

// P@nkaj96