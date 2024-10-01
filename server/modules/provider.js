require('dotenv').config();
const { v4 } = require('uuid')
const { MongoOprations } = require('../services/mongo/mongo-operation')
const { MONGO_INVOICE_DB, MONGO_SUPPLIERS_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_INVOICE_DB)

const existProvider = async (name) => {
    mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;
    if (name == undefined || name == null) {
        throw new Error('name is not defined')
    }
    if (typeof (name) !== 'string') {
        throw new Error('name must be type of string')
    }
    try {
        const response = await mongoOprations.find({ filter: { name } })
        return response.length > 0;
    }
    catch (error) {
        throw error;
    }
}

const createNewProvider = async (provider) => {
    const client = await existProvider(provider.name);
    if (client) {
        const error = {
            message: `provider '${provider.name}' is not available`,
            type: 422
        }
        throw error
    }
    const id = v4();
    provider.id = id;
    try {
        mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;
        await mongoOprations.insertItem(provider);
        return provider;
    }
    catch (error) {
        throw error;
    }
}

const getAllProviders = async () => {    
    mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;
    const provider = await mongoOprations.getAllItems();
    return provider;
}

module.exports = { existProvider, createNewProvider, getAllProviders }