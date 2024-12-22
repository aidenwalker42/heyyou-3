import mongodb from 'mongodb'


async function loadCustomerContactCollection() {
    apiKey = process.env.MONGO
    const client = await mongodb.MongoClient.connect(process.env.MONGO, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('customer-contact')
  }
  
  async function loadWebsiteModificationCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('website-modification')
  }

  async function loadAdminsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('admins')
  }

export {loadCustomerContactCollection, loadWebsiteModificationCollection, loadAdminsCollection}
