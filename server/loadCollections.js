import mongodb from 'mongodb'


async function loadCustomerContactCollection() {
    apiKey = process.env.MONGO
    const client = await mongodb.MongoClient.connect(process.env.MONGO, {useNewUrlParser: true}, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('customer-contact')
  }
  
  async function loadWebsiteModificationCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO, {useNewUrlParser: true}, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('website-modification')
  }

export {loadCustomerContactCollection, loadWebsiteModificationCollection}
