import mongodb from 'mongodb'

async function loadCustomerContactCollection() {
    const client = await mongodb.MongoClient.connect("mongodb+srv://carlowebadmin:28GQfgSu2H5LZTtC@cluster0.uagt0nc.mongodb.net/heyyou?retryWrites=true&w=majority")
  
    return client.db('heyyou').collection('customer-contact')
  }

const customerContactCol = await loadCustomerContactCollection()

let fuckYou = customerContactCol.deleteMany({})
