var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb');

client.connect()
    /*.then(() => console.log('Connection Success'))
    .catch(error => console.log('Connection Failed', error));*/

    var dbo = client.db('statsdb');
    /*dbo.createCollection('uscensus').then(() => {
        console.log('Collection Created!');
        client.close();
    })*/

    /*dbo.collection('uscensus').insertMany(stats).then((res) => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
    })*/

    var added = [
      {
        city: "Pacoima",
        zip: "91331",
        state: "CA",
        income: "60360",
        age: "33",
      },
      {
        city: "Ketchikan",
        zip: "99950",
        state: "AK",
        income: "00000",
        age: "00",
      },
    ];
    /*dbo.collection('uscensus').insertMany(added).then((res) => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
    })*/

    /*var query = { zip: "11368" }
    dbo.collection('uscensus').find(query)
        .toArray()
        .then(items => {
            console.log(`Successfully found ${items.legnth} documents.`);
            console.log(items);
            client.close();
        })*/
    
    /*var myquery = {state: 'CA'}
    dbo.collection('uscensus').find(myquery)
        .toArray()
        .then(items => {
            console.log(`Successfully found ${items.legnth} documents.`);
            console.log(items);
            client.close();
        })*/
    
    /*var myquery = {state: 'AK'}
    var newvalues = {$set: {zip: '38910', age: '46'}};
    dbo.collection('uscensus').updateOne(myquery,newvalues).then(() => {
        console.log('1 document updated');
        client.close();
    })*/

    var sorter = {state: 1}
    dbo.collection('uscensus').find()
        .sort(sorter)
        .toArray()
        .then(item => {
            console.log(`Successfully sorted ${item.legnth} documents.`)
            console.log(items);
            client.close();
        })
    .catch((error) => {
      "Failed to Connect", error;
    });