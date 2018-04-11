const WebSocket = require('ws')

const MongoClient = require('mongodb').MongoClient;

const ws = new WebSocket(process.env.WSS_URL)

const url = 'mongodb://localhost:27017';
const dbName = 'wss_record';

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const collection = db.collection('documents');
  ws.on('message', data => {
    console.log(data)
  collection.insertMany([ JSON.parse(data) ])
  })
});
