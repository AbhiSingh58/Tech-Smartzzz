const http = require('http')
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://thakurabhi:thakurabhidbuser@ac-yuhtfmk-shard-00-00.m4pylpu.mongodb.net:27017,ac-yuhtfmk-shard-00-01.m4pylpu.mongodb.net:27017,ac-yuhtfmk-shard-00-02.m4pylpu.mongodb.net:27017/?ssl=true&replicaSet=atlas-maa2rx-shard-0&authSource=admin&retryWrites=true&w=majority');
const db = client.db('customerInfo')

http.createServer(async (req, res) => {
    const supportedCollections = await db.listCollections().toArray((err, names) => names)

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', async() => {
            const isCollectionAvailabel = supportedCollections.find((collection) => collection.name === 'techSmartzz_Info')
            let collection;
            let  parsedBody = JSON.parse(body)

            // const collection = db.createCollection(',ddm')
            if (!isCollectionAvailabel) {
                collection = await (await db.createCollection('techSmartzz_Info')).insertOne(parsedBody)
            }
            else if(isCollectionAvailabel){
                db.collection('techSmartzz_Info').insertOne(parsedBody)
            }
            res.writeHead(200, {'Content-Type': 'text/html',
            'Access-Control-Allow-Origin' : '*',});
            
            res.write("DATA POSTED")
            res.end()
        });
    }
    // res.end('ok')
}).listen(process.env.PORT || 8080);

