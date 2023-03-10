const http = require('http')
const { MongoClient } = require('mongodb')
const { mongoUrl, PORT } = require('./Config/Keys')

const client = new MongoClient(mongoUrl);
const db = client.db('customerInfo')

http.createServer(async (req, res) => {
    const supportedCollections = await db.listCollections().toArray((err, names) => names)
    console.log(req.url)

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', async () => {
            const isCollectionAvailabel = supportedCollections.find((collection) => collection.name === 'techSmartzz_Info')
            let collection;
            let parsedBody = JSON.parse(body)

            // const collection = db.createCollection(',ddm')
            if (!isCollectionAvailabel) {
                collection = await (await db.createCollection('techSmartzz_Info')).insertOne(parsedBody)
            }
            else if (isCollectionAvailabel) {
                db.collection('techSmartzz_Info').insertOne(parsedBody)
            }
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Access-Control-Allow-Origin': '*',
            });

            res.write("DATA POSTED")
            res.end()
        });
    }
}).listen(PORT);

