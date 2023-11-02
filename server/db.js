const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    // Replace the connection URL with your MongoDB server's URL
    const uri = 'mongodb://127.0.0.1:27017/bookstore';
    
    const client = new MongoClient(uri);

    client.connect()
      .then(() => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};

// const { MongoClient } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1/:27017/bookstore";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('bookstore');
//     const movies = database.collection('books');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Name of the Wind' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);