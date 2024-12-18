import mongodb from 'mongodb'
import atlas from "../secrets.json" assert {type: "json"}

async function loadCustomerContactCollection() {
    const client = await mongodb.MongoClient.connect(atlas.atlas, {useNewUrlParser: true}, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('customer-contact')
  }
  
  async function loadWebsiteModificationCollection() {
    const client = await mongodb.MongoClient.connect(atlas.atlas, {useNewUrlParser: true}, { useUnifiedTopology: true })
  
    return client.db('heyyou').collection('website-modification')
  }

export {loadCustomerContactCollection, loadWebsiteModificationCollection}
