const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017';
const databaseName = 'shopDb'
const client = new MongoClient(url);

async function dbConnect() {
    const result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('products');
}
module.exports = dbConnect;