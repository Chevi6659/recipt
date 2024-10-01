require('dotenv').config();
const { existExpenses, createNewExpenses } = require('../../modules/expensess');
const { openConnection, getClient } = require('../../services/mongo/mongo-connection');
const { isConnected } = require('../services/mongo/mongo-helpers')

const { TEST_MONGO_SERVER } = process.env;

describe('EXIST_EXPENSES', () => {

    afterEach(async () => {
        const client = getClient();
        const response = await isConnected(client);
        if (response) {
            await client.close();
        }
    });

    it('should return true when the expenses is exist', async () => {
        await openConnection(TEST_MONGO_SERVER)
        const response = await existExpenses('Racheli');
        expect(response).toBeTruthy();
    })

    it('should return false when the expenses is not exist', async () => {
        await openConnection(TEST_MONGO_SERVER);
        const response = await existExpenses('dan');
        expect(response).not.toBeTruthy();
    })
})

describe('CREATE_NEW_EXPENSES', () => {
    it('should create expenses when expenses is not exist', async () => {
        await openConnection(TEST_MONGO_SERVER);
        const name = 'chana'
        const response = await createNewExpenses({ name: name });
        expect(response).toBeDefined();
        expect(response.name).toBe(name);
    })

    it('should throw error when expenses is exist', async () => {
        try {
            await openConnection(TEST_MONGO_SERVER);
            await createNewExpenses({ name: "chanan" });
        }
        catch (error) {
            {
                expect(error.message).toBe(`username 'chanan' is not available`)
                expect(error.type).toEqual(422)
            }
        }
    })

    it('should throw error when expenses is not an object', async () => {
        try {
            await openConnection(TEST_MONGO_SERVER);
            await createNewExpenses(1234);
        }
        catch (error) {
            {
                expect(error).toBeDefined();
            }
        }
    })
})