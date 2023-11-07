const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    // Replace the connection URL with your MongoDB server's URL
    const uri = 'mongodb://127.0.0.1:27017/aquarium_store';
    
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