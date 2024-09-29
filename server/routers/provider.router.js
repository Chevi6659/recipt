const express = require('express');
const { createNewProvider, existProvider, getAllProviders } = require('../modules/provider')
const providersRouter = express.Router();

providersRouter.post('/createProvider', express.json(), async (req, res) => {
    try {
        const provider = req.body;
        const response = await createNewProvider(provider);
        res.status(200).json(response);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

providersRouter.get('/existProvider/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await existProvider(name);
        res.status(200).json({ exist: response });
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

providersRouter.get('/getAllProviders', async (req, res) => {
    try {
        const providers = await getAllProviders();
        res.status(200).send(providers);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

module.exports = providersRouter;