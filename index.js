const WebSocket = require('ws')
const MongoClient = require('mongodb').MongoClient

const ws = new WebSocket(process.env.WSS_URL)
const url = 'mongodb://mongodb:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  console.log("Connected successfully to server")
  const db = client.db('wss_record')
  const collection = db.collection(url)
  ws.on('message', data => {
    console.log(data)
    collection.insertMany([ JSON.parse(data) ])
  })
})
